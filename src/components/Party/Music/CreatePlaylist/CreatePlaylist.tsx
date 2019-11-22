import {
  getPartyPlaylistConnectionVariables,
  PARTY_PLAYLISTS_CONNECTION_QUERY
} from '../Playlists/Playlists';
import CreatePlaylistError from './CreatePlaylistError';
import CreatePlaylistForm, {
  CreatePlaylistFormValues
} from './CreatePlaylistForm';
import PlaylistCreated from './PlaylistCreated';
import SelectedTracks from './SelectedTracks';

import { useParty } from '@components/Party/PartyProvider';
import { createSpotifyPlaylist } from '@components/Party/shared';
import css from '@emotion/css';
import {
  Full_Saved_Track_FragmentFragment,
  Party_CreatePlaylistMutationFn,
  Party_PlaylistsConnectionQuery,
  useParty_CreatePlaylist
} from '@generated/graphql';
import { PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT } from '@graphql/fragments';
import SpotifyGuard from '@guards/SpotifyGuard';
import { useMachine } from '@xstate/react';
import { message, Modal } from 'antd';
import gql from 'graphql-tag';
import React from 'react';
import { Playlist } from 'spotify-web-sdk';
import { actions, Machine } from 'xstate';

interface Props {
  tracks: Full_Saved_Track_FragmentFragment[];
  onClose: (isClosingAfterSuccess: boolean) => void;
}

interface MachineContext {
  createPlaylistPayload: {
    tracks: Full_Saved_Track_FragmentFragment[];
    playlistName: string;
    isPrivate: boolean;
    notImportable: boolean;
  };
  partyId: string;
  userId: string;
  createdPlaylist: Playlist | undefined;
  savePlaylist: Party_CreatePlaylistMutationFn;
}

const ModalStyles = css`
  min-width: 530px;
  width: auto;
  top: 24px;

  .ant-modal-content {
    max-height: calc(100vh - 48px);

    overflow-y: auto;
  }

  @media screen and (max-width: 680px) {
    width: 100%;
    min-width: 100%;
    padding: 6px;
    top: 0;

    .ant-modal-close-x {
      width: 47px;
      height: 47px;
      margin-left: auto;
      line-height: 47px;
    }
    .ant-list-header {
      padding: 12px;
    }
    button {
      width: 100%;
    }
    .ant-modal-header,
    .ant-modal-body {
      padding: 12px;
    }
  }
`;

export const CREATE_PLAYLIST_MUTATION = gql`
  mutation Party_CreatePlaylist($data: PlaylistCreateInput!) {
    createPlaylist(data: $data) {
      ...PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT
    }
  }
  ${PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT}
`;

const playlistMachine = Machine(
  {
    id: 'fetch',
    initial: 'idle',
    states: {
      idle: {
        on: {
          CREATE: 'loading'
        },
        onExit: 'setPreFetchData'
      },
      error: {
        entry: 'notifyFailure',
        on: {
          RETRY: 'errorLoading'
        }
      },
      errorLoading: {
        invoke: {
          src: 'createPlaylist',
          onDone: {
            target: 'success',
            actions: 'setData'
          },
          onError: 'error'
        },
        on: {
          SUCCESS_ERROR: 'success',
          FAILURE_ERROR: 'error'
        }
      },
      loading: {
        invoke: {
          src: 'createPlaylist',
          onDone: {
            target: 'success',
            actions: 'setData'
          },
          onError: 'error'
        },
        on: {
          SUCCESS: 'success'
        }
      },
      success: {
        on: {
          RESET: 'idle'
        }
      }
    }
  },
  {
    actions: {
      notifyFailure: () => message.error('Could not create playlist'),
      setData: actions.assign({ createdPlaylist: (_, event) => event.data }),
      setPreFetchData: actions.assign({
        createPlaylistPayload: (_, event) => event.payload
      })
    },
    services: {
      createPlaylist: async ({
        createPlaylistPayload: {
          tracks,
          playlistName,
          isPrivate,
          notImportable
        },
        savePlaylist,
        partyId,
        userId
      }: MachineContext) => {
        const spotifyPlaylistData = await createSpotifyPlaylist(
          tracks.map(track => track.uri),
          playlistName,
          !isPrivate
        );

        await savePlaylist({
          variables: {
            data: {
              tracks: { connect: tracks.map(track => ({ id: track.id })) },
              parties: { connect: [{ id: partyId }] },
              name: playlistName,
              user: { connect: { id: userId } },
              imageUrl: spotifyPlaylistData.images[0].url,
              uri: spotifyPlaylistData.uri,
              importable: !notImportable,
              spotifyId: spotifyPlaylistData.id,
              spotifyExternalUrl: spotifyPlaylistData.externalUrls.spotify
            }
          },
          update: (proxy, { data }) => {
            if (data == undefined || data.createPlaylist == undefined) return;
            try {
              const dataInCache = proxy.readQuery<
                Party_PlaylistsConnectionQuery
              >({
                query: PARTY_PLAYLISTS_CONNECTION_QUERY,
                variables: getPartyPlaylistConnectionVariables()
              });
              if (dataInCache == undefined) return;

              const { createPlaylist } = data;
              const { playlistsConnection } = dataInCache;

              playlistsConnection.edges.push({
                __typename: 'PlaylistEdge',
                node: {
                  __typename: 'Playlist',
                  ...createPlaylist
                }
              });

              proxy.writeQuery<Party_PlaylistsConnectionQuery>({
                query: PARTY_PLAYLISTS_CONNECTION_QUERY,
                variables: getPartyPlaylistConnectionVariables(),
                data: {
                  playlistsConnection: {
                    ...playlistsConnection
                  }
                }
              });
            } catch (e) {
              // noop
            }
          }
        });
        return { ...spotifyPlaylistData, notImportable };
      }
    }
  }
);

export default function CreatePlaylist({ onClose, tracks }: Props) {
  const [tracksInState, setTracksInState] = React.useState(tracks);
  const { partyId, userId } = useParty();

  const [savePlaylist] = useParty_CreatePlaylist();

  const [state, send] = useMachine<MachineContext, any>(playlistMachine, {
    context: {
      createdPlaylist: undefined,
      savePlaylist,
      createPlaylistPayload: {
        playlistName: '',
        isPrivate: false,
        tracks: [],
        notImportable: false
      },
      partyId,
      userId
    }
  });

  const { createdPlaylist } = state.context;

  const handleFormSubmit = (formValues: CreatePlaylistFormValues) => {
    send('CREATE', { payload: { ...formValues, tracks: tracksInState } });
  };

  const handleRetryClick = () => send('RETRY');

  function handleClose() {
    send('RESET');
    if (state.value == 'success') return onClose(true);
    onClose(false);
  }

  function handleRemoveTrack(track: Full_Saved_Track_FragmentFragment) {
    const filteredTracks = tracksInState.filter(({ id }) => id != track.id);
    setTracksInState(filteredTracks);
  }

  const shouldDisplaySelectedTracks = ['idle', 'loading'].includes(
    state.value as string
  );

  return (
    <Modal
      closable={true}
      maskClosable={true}
      onCancel={handleClose}
      css={[ModalStyles]}
      visible={true}
      title="Create Spotify playlist"
      footer={null}
    >
      <SpotifyGuard>
        {state.value == 'idle' ? (
          <CreatePlaylistForm
            onSubmit={handleFormSubmit}
            loading={false}
            disabled={tracksInState.length == 0}
          />
        ) : state.value == 'loading' ? (
          <CreatePlaylistForm
            onSubmit={handleFormSubmit}
            loading={true}
            disabled={tracksInState.length == 0}
          />
        ) : state.value == 'error' ? (
          <CreatePlaylistError
            onRetry={handleRetryClick}
            retryLoading={false}
          />
        ) : state.value == 'errorLoading' ? (
          <CreatePlaylistError onRetry={handleRetryClick} retryLoading={true} />
        ) : state.value == 'success' ? (
          <PlaylistCreated createdPlaylist={createdPlaylist as any} />
        ) : null}
        {shouldDisplaySelectedTracks && (
          <SelectedTracks
            loading={state.value == 'loading'}
            tracks={tracksInState}
            onRemoveTrack={handleRemoveTrack}
          />
        )}
      </SpotifyGuard>
    </Modal>
  );
}
