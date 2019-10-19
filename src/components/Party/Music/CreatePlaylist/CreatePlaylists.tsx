import { Full_Saved_Track_FragmentFragment } from '@generated/graphql';
import { useMachine } from '@xstate/react';
import { message, Modal } from 'antd';
import React from 'react';
import {
  createPlaylist,
  getCurrentUserProfile,
  addTracksToPlaylist,
  getPlaylist
} from 'spotify-web-sdk';
import { actions, Machine } from 'xstate';

import CreatePlaylistError from './CreatePlaylistError';
import CreatePlaylistForm from './CreatePlaylistForm';
import PlaylistCreated from './PlaylistCreated';
import useSpotifyWebSdk from '@hooks/useSpotifyWebSdk';

interface Props {
  tracks: Full_Saved_Track_FragmentFragment[];
  visible: boolean;
  onClose: VoidFunction;
}

const playlistMachine = Machine(
  {
    id: 'fetch',
    initial: 'idle',
    context: {
      createdPlaylist: {},
      playlistName: undefined,
      tracks: []
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
      success: {}
    }
  },
  {
    actions: {
      notifyFailure: () => message.error('Could not create playlist'),
      setData: actions.assign({ createdPlaylist: (_, event) => event.data }),
      setPreFetchData: actions.assign({
        playlistName: (_, event) => event.playlistName,
        tracks: (_, event) => event.tracks
      })
    },
    services: {
      createSpotifyPlaylist: async ({ playlistName, tracks }) => {
        const { id } = await getCurrentUserProfile();
        const { id: playlistId } = await createPlaylist(id, playlistName);
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

  const handleFormSubmit = () =>
    send('CREATE', { playlistName: 'elobenc', tracks });
  const handleRetryClick = () => send('RETRY');

  return (
    <Modal
      closable={true}
      maskClosable={true}
      onCancel={onClose}
      centered={true}
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
        <PlaylistCreated />
      ) : null}
    </Modal>
  );
}
