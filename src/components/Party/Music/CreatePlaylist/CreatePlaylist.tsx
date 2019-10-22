import {
  Full_Saved_Track_FragmentFragment,
  useParty_CreatePlaylist,
  Party_CreatePlaylistMutationFn
} from '@generated/graphql';
import { useMachine } from '@xstate/react';
import { message, Modal } from 'antd';
import React from 'react';
import {
  createPlaylist,
  getCurrentUserProfile,
  addTracksToPlaylist,
  getPlaylist,
  Playlist
} from 'spotify-web-sdk';
import { actions, Machine } from 'xstate';

import CreatePlaylistError from './CreatePlaylistError';
import CreatePlaylistForm, {
  CreatePlaylistFormValues
} from './CreatePlaylistForm';
import PlaylistCreated from './PlaylistCreated';
import css from '@emotion/css';
import SelectedTracks from './SelectedTracks';
import SpotifyGuard from '@guards/SpotifyGuard';
import gql from 'graphql-tag';
import { useParty } from '@components/Party/PartyProvider';

interface Props {
  tracks: Full_Saved_Track_FragmentFragment[];
  onClose: (isClosingAfterSuccess: boolean) => void;
}

interface MachineContext {
  createPlaylistPayload: {
    tracks: Full_Saved_Track_FragmentFragment[];
    playlistName: string;
    isPrivate: boolean;
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
    overflow: scroll;
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
      id
    }
  }
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
        createPlaylistPayload: { tracks, playlistName, isPrivate },
        savePlaylist,
        partyId,
        userId
      }: MachineContext) => {
        const { id } = await getCurrentUserProfile();

        const { id: playlistId } = await createPlaylist(id, playlistName, {
          public: !isPrivate
        });

        await addTracksToPlaylist(playlistId, tracks.map(track => track.uri));

        const spotifyPlaylistData = await getPlaylist(playlistId);

        await savePlaylist({
          variables: {
            data: {
              tracks: { connect: tracks.map(track => ({ id: track.id })) },
              parties: { connect: [{ id: partyId }] },
              name: playlistName,
              isTemporary: false,
              user: { connect: { id: userId } },
              uri: spotifyPlaylistData.uri,
              spotifyId: spotifyPlaylistData.id,
              spotifyExternalUrl: spotifyPlaylistData.externalUrls.spotify
            }
          }
        });

        return spotifyPlaylistData;
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
        tracks: []
      },
      partyId,
      userId
    }
  });

  const { createdPlaylist } = state.context;

  const handleFormSubmit = (formValues: CreatePlaylistFormValues) =>
    send('CREATE', { payload: { ...formValues, tracks: tracksInState } });

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
      destroyOnClose={true}
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
