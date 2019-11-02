import {
  getPartyPlaylistConnectionVariables,
  PARTY_PLAYLISTS_CONNECTION_QUERY
} from '../Playlists/Playlists';
import ModalPlaylistItem from '../shared/ModalPlaylistItem';
import CombinePlaylistsForm, {
  CombinePlaylistFormValues
} from './CombinePlaylistsForm';

import { createSpotifyPlaylist } from '@components/Party/shared';
import { GreenSpotifyButton } from '@components/UI/SpotifyButton';
import {
  Party_Playlists_Connection_Node_FragmentFragment,
  Party_PlaylistsConnectionEdges,
  useParty_CombinePlaylistsMutation
} from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { List, Modal } from 'antd';
import gql from 'graphql-tag';
import { compose, flatten, map } from 'ramda';
import React from 'react';

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
type Track = NonNullable<
  Party_Playlists_Connection_Node_FragmentFragment['tracks']
>[0];
type Playlist = DeepWithoutMaybe<Party_PlaylistsConnectionEdges>;

function getTracksUrisFromPlaylists(playlists: Playlist[]) {
  return compose(
    map((track: Track) => track.uri),
    flatten,
    map((playlist: Playlist) => playlist.node.tracks)
  )(playlists);
}

interface Props {
  selectedPlaylists: Playlist[];
  partyId: string;
  userId: string;
}

export default function CombinePlaylists({
  selectedPlaylists,
  partyId,
  userId
}: Props) {
  const [mutate] = useParty_CombinePlaylistsMutation();

  const [modalVisible, setModalVisible] = React.useState(false);
  // capture local state so that user can change their mind
  const [localPlaylists, setLocalPlaylists] = React.useState(selectedPlaylists);

  const toggleModalVisible = () => setModalVisible(prev => !prev);

  const hasSelectedAtLeastTwo = selectedPlaylists.length > 1;

  function handleDeselect(playlist: Playlist) {
    const filtered = localPlaylists.filter(
      playlistInState => playlistInState.node.id != playlist.node.id
    );
    setLocalPlaylists(filtered);
  }

  function handleSelect(playlist: Playlist) {
    setLocalPlaylists(prev => [...prev, playlist]);
  }

  React.useEffect(() => {
    if (!modalVisible) return;
    setLocalPlaylists(selectedPlaylists);
  }, [modalVisible, selectedPlaylists]);

  function isStillSelected(playlist: Playlist) {
    return localPlaylists.some(
      localPlaylist => localPlaylist.node.id == playlist.node.id
    );
  }

  async function handleOnSubmit({
    name,
    shouldDeleteWhenCombining
  }: CombinePlaylistFormValues) {
    const spotifyPlaylistData = await createSpotifyPlaylist(
      getTracksUrisFromPlaylists(localPlaylists),
      name as string,
      true
    );

    mutate({
      variables: {
        partyPlannerData: {
          playlists: localPlaylists.map(playlist => playlist.node.id).join(','),
          userId,
          partyId,
          deleteAffected: Boolean(shouldDeleteWhenCombining)
        },
        spotifyData: {
          imageUrl: spotifyPlaylistData.images[0].url,
          uri: spotifyPlaylistData.uri,
          spotifyId: spotifyPlaylistData.id,
          spotifyExternalUrl: spotifyPlaylistData.externalUrls
            .spotify as string,
          name: spotifyPlaylistData.name
        }
      },
      refetchQueries: [
        {
          query: PARTY_PLAYLISTS_CONNECTION_QUERY,
          variables: getPartyPlaylistConnectionVariables()
        }
      ]
    });
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
        closable={true}
        maskClosable={true}
        visible={modalVisible}
        onCancel={toggleModalVisible}
        footer={null}
      >
        <CombinePlaylistsForm
          onSubmit={handleOnSubmit}
          disabled={localPlaylists.length < 2}
        />
        <List
          bordered={true}
          header={`Selected playlists (${localPlaylists.length})`}
        >
          {selectedPlaylists.map(playlist => (
            <ModalPlaylistItem
              isSelected={isStillSelected(playlist)}
              playlist={playlist.node}
              onDeselect={() => handleDeselect(playlist)}
              onSelect={() => handleSelect(playlist)}
              onSpotifyButtonClick={() => {}}
              key={playlist.node.id}
            />
          ))}
        </List>
      </Modal>
    </React.Fragment>
  );
}
