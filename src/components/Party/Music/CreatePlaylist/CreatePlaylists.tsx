import { Full_Saved_Track_FragmentFragment } from '@generated/graphql';
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
import useSpotifyWebSdk from '@hooks/useSpotifyWebSdk';
import css from '@emotion/css';

interface Props {
  tracks: Full_Saved_Track_FragmentFragment[];
  visible: boolean;
  onClose: (isClosingAfterSuccess: boolean) => void;
}

interface MachineContext {
  createPlaylistPayload: {
    tracks: Full_Saved_Track_FragmentFragment[];
    playlistName: string;
    isPrivate: boolean;
  };
  createdPlaylist: Playlist | undefined;
}

const ModalStyles = css`
  min-width: 530px;
  width: auto;
`;

const playlistMachine = Machine(
  {
    id: 'fetch',
    initial: 'idle',
    context: {
      createdPlaylist: undefined,
      createPlaylistPayload: {
        playlistName: '',
        isPrivate: false,
        tracks: []
      }
    },
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
          src: 'createSpotifyPlaylist',
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
          src: 'createSpotifyPlaylist',
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
      createSpotifyPlaylist: async ({
        createPlaylistPayload: { tracks, playlistName, isPrivate }
      }: MachineContext) => {
        const { id } = await getCurrentUserProfile();
        const { id: playlistId } = await createPlaylist(id, playlistName, {
          public: !isPrivate
        });
        await addTracksToPlaylist(playlistId, tracks.map(track => track.uri));
        return await getPlaylist(playlistId);
      }
    }
  }
);

export default function CreatePlaylists({ visible, onClose, tracks }: Props) {
  useSpotifyWebSdk();

  const [state, send] = useMachine(playlistMachine, {
    services: {}
  });
  const { createdPlaylist } = state.context;

  const handleFormSubmit = (formValues: CreatePlaylistFormValues) =>
    send('CREATE', { payload: { ...formValues, tracks } });

  const handleRetryClick = () => send('RETRY');

  function handleClose() {
    send('RESET');
    if (state.value == 'success') return onClose(true);
    onClose(false);
  }

  return (
    <Modal
      destroyOnClose={true}
      closable={true}
      maskClosable={true}
      onCancel={handleClose}
      centered={true}
      css={[ModalStyles]}
      visible={visible}
      title="Create Spotify playlist"
      footer={null}
    >
      {state.value == 'idle' ? (
        <CreatePlaylistForm onSubmit={handleFormSubmit} loading={false} />
      ) : state.value == 'loading' ? (
        <CreatePlaylistForm onSubmit={handleFormSubmit} loading={true} />
      ) : state.value == 'error' ? (
        <CreatePlaylistError onRetry={handleRetryClick} retryLoading={false} />
      ) : state.value == 'errorLoading' ? (
        <CreatePlaylistError onRetry={handleRetryClick} retryLoading={true} />
      ) : state.value == 'success' ? (
        <PlaylistCreated createdPlaylist={createdPlaylist as any} />
      ) : null}
    </Modal>
  );
}
