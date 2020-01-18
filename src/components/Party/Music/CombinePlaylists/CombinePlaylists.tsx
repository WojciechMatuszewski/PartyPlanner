import {
  getPartyPlaylistConnectionVariables,
  PARTY_PLAYLISTS_CONNECTION_QUERY
} from '../Playlists/Playlists';
import CombinePlaylistsForm, {
  CombinePlaylistFormValues
} from './CombinePlaylistsForm';
import CombinePlaylistsList from './CombinePlaylistsList';
import { CombinePlaylistsMachine } from './machine';

import { createSpotifyPlaylist } from '@components/Party/shared';
import { GreenSpotifyButton } from '@components/UI/SpotifyButton';
import {
  Party_Playlists_Connection_Node_FragmentFragment,
  Party_PlaylistsConnectionEdges,
  useParty_CombinePlaylistsMutation
} from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { useMachine } from '@xstate/react';
import { Button, Modal, Result } from 'antd';
import gql from 'graphql-tag';
import { compose, flatten, map } from 'ramda';
import React from 'react';
import { Playlist as SDKPlaylist } from 'spotify-web-sdk';
import { actions } from 'xstate';
import css from '@emotion/css';

export const COMBINE_PLAYLISTS_MUTATION = gql`
  mutation Party_CombinePlaylists(
    $partyPlannerData: CombinePlaylistPartyPlannerData!
    $spotifyData: CombinePlaylistCreatedSpotifyPlaylistInput!
  ) {
    combinePlaylists(
      partyPlannerData: $partyPlannerData
      spotifyData: $spotifyData
    ) {
      id
    }
  }
`;

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

function getTracksUrisFromPlaylists(playlists: Playlist[]) {
  return compose(
    map((track: Track) => track.uri),
    flatten,
    map((playlist: Playlist) => playlist.node.tracks)
  )(playlists);
}

type Track = NonNullable<
  Party_Playlists_Connection_Node_FragmentFragment['tracks']
>[0];
type Playlist = DeepWithoutMaybe<Party_PlaylistsConnectionEdges>;

export interface CombinePlaylistsMachineContext {
  createdSpotifyPlaylist: SDKPlaylist | undefined;
  formData: CombinePlaylistFormValues;
  playlists: Playlist[];
  userId: string;
  partyId: string;
}

interface Props {
  selectedPlaylists: Playlist[];
  partyId: string;
  userId: string;
  onFinished: VoidFunction;
}

export default function CombinePlaylists({
  selectedPlaylists,
  partyId,
  userId,
  onFinished
}: Props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  // capture local state so that user can change their mind
  const [localPlaylists, setLocalPlaylists] = React.useState(selectedPlaylists);

  React.useEffect(() => {
    setLocalPlaylists(selectedPlaylists);
  }, [selectedPlaylists]);

  const [mutate] = useParty_CombinePlaylistsMutation({
    notifyOnNetworkStatusChange: false
  });

  const [currentMachineState, send] = useMachine(CombinePlaylistsMachine, {
    context: {
      createdSpotifyPlaylist: undefined,
      formData: undefined,
      userId,
      partyId
    },
    actions: {
      setPreWorkData: actions.assign({
        formData: (_, event) =>
          event.payload.formData as CombinePlaylistFormValues,
        playlists: (_, event) => event.payload.playlists as any
      }),
      setSpotifyPlaylistData: actions.assign({
        createdSpotifyPlaylist: (_, event) => event.data as any
      })
    },
    services: {
      createPlaylistInSpotify: createNewPlaylistInSpotify,
      combineSelectedPlaylists: createCombinedPartyPlannerPlaylist
    }
  });

  const toggleModalVisible = () => setModalVisible(prev => !prev);
  const hasSelectedAtLeastTwo = selectedPlaylists.length > 1;

  const formLoading =
    currentMachineState.value == 'workingSpotify' ||
    currentMachineState.value == 'workingPartyPlanner';

  const isErrorLoading =
    currentMachineState.value == 'errorSpotifyLoading' ||
    currentMachineState.value == 'errorPartyPlannerLoading';

  const showError =
    currentMachineState.value == 'errorSpotify' ||
    currentMachineState.value == 'errorPartyPlanner' ||
    isErrorLoading;

  const showSuccess = currentMachineState.value == 'success';

  const shouldResetMachineOnClose = showError || showSuccess;

  function handleDeselect(playlist: Playlist) {
    const filtered = localPlaylists.filter(
      playlistInState => playlistInState.node.id != playlist.node.id
    );
    setLocalPlaylists(filtered);
  }

  function handleSelect(playlist: Playlist) {
    setLocalPlaylists(prev => [...prev, playlist]);
  }

  function isStillSelected(playlist: Playlist) {
    return localPlaylists.some(
      localPlaylist => localPlaylist.node.id == playlist.node.id
    );
  }

  function handleFormSubmit(formData: CombinePlaylistFormValues) {
    send('START', {
      payload: { formData, playlists: localPlaylists }
    });
  }

  function createNewPlaylistInSpotify({
    playlists,
    formData
  }: CombinePlaylistsMachineContext) {
    return createSpotifyPlaylist(
      [...new Set(getTracksUrisFromPlaylists(playlists))],
      formData.name as string,
      true
    );
  }

  function createCombinedPartyPlannerPlaylist({
    createdSpotifyPlaylist,
    playlists,
    userId,
    partyId,
    formData
  }: CombinePlaylistsMachineContext) {
    const spotifyPlaylist = createdSpotifyPlaylist as SDKPlaylist;
    return mutate({
      variables: {
        partyPlannerData: {
          playlists: playlists.map(playlist => playlist.node.id).join(','),
          userId,
          partyId,
          deleteAffected: Boolean(formData.shouldDeleteWhenCombining),
          importable: !formData.notImportable
        },
        spotifyData: {
          imageUrl: spotifyPlaylist.images[0].url,
          uri: spotifyPlaylist.uri,
          spotifyId: spotifyPlaylist.id,
          spotifyExternalUrl: spotifyPlaylist.externalUrls.spotify as string,
          name: spotifyPlaylist.name
        }
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: PARTY_PLAYLISTS_CONNECTION_QUERY,
          variables: getPartyPlaylistConnectionVariables()
        }
      ]
    });
  }

  function handleClose() {
    if (shouldResetMachineOnClose) send('IDLE');
    if (showSuccess) onFinished();
    toggleModalVisible();
  }

  return (
    <React.Fragment>
      <GreenSpotifyButton
        disabled={!hasSelectedAtLeastTwo}
        onClick={toggleModalVisible}
      >
        Combine playlists
      </GreenSpotifyButton>
      <Modal
        title="Combine Playlists"
        closable={!formLoading}
        maskClosable={true}
        visible={modalVisible}
        onCancel={handleClose}
        footer={null}
        centered={true}
        css={ModalStyles}
      >
        {showSuccess ? (
          <Result
            status="success"
            title="Playlists combined"
            subTitle="Playlists were combined successfully!"
            extra={<Button onClick={handleClose}>Close</Button>}
          />
        ) : showError ? (
          <Result
            status="error"
            title="Something went wrong"
            subTitle="Something went wrong and we could not finish the action"
            extra={
              <Button
                onClick={() => send('ERROR_RETRY')}
                loading={isErrorLoading}
              >
                Try again
              </Button>
            }
          />
        ) : (
          <React.Fragment>
            <CombinePlaylistsForm
              loading={formLoading}
              onSubmit={handleFormSubmit}
              disabled={localPlaylists.length < 2}
            />
            <CombinePlaylistsList
              isPlaylistStillSelected={isStillSelected}
              onDeselectPlaylist={handleDeselect}
              onSelectPlaylist={handleSelect}
              numberOfSelectedItems={localPlaylists.length}
              playlists={selectedPlaylists}
            />
          </React.Fragment>
        )}
      </Modal>
    </React.Fragment>
  );
}
