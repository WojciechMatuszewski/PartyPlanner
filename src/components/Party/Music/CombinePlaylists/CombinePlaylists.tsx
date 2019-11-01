import ModalPlaylistItem from '../shared/ModalPlaylistItem';
import CombinePlaylistsForm from './CombinePlaylistsForm';

import { GreenSpotifyButton } from '@components/UI/SpotifyButton';
import { Party_PlaylistsConnectionEdges } from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { Button, List, Modal } from 'antd';
import React from 'react';

interface Props {
  selectedPlaylists: DeepWithoutMaybe<Party_PlaylistsConnectionEdges[]>;
}

export default function CombinePlaylists({ selectedPlaylists }: Props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  // capture local state so that user can change their mind
  const [localPlaylists, setLocalPlaylists] = React.useState(selectedPlaylists);

  const toggleModalVisible = () => setModalVisible(prev => !prev);

  const hasSelectedAtLeastTwo = selectedPlaylists.length > 1;

  function handleDeselect(
    playlist: DeepWithoutMaybe<Party_PlaylistsConnectionEdges>
  ) {
    const filtered = localPlaylists.filter(
      playlistInState => playlistInState.node.id != playlist.node.id
    );
    setLocalPlaylists(filtered);
  }

  function handleSelect(
    playlist: DeepWithoutMaybe<Party_PlaylistsConnectionEdges>
  ) {
    setLocalPlaylists(prev => [...prev, playlist]);
  }

  React.useEffect(() => {
    if (!modalVisible) return;
    setLocalPlaylists(selectedPlaylists);
  }, [modalVisible, selectedPlaylists]);

  function isStillSelected(
    playlist: DeepWithoutMaybe<Party_PlaylistsConnectionEdges>
  ) {
    return localPlaylists.some(
      localPlaylist => localPlaylist.node.id == playlist.node.id
    );
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
        footer={
          <React.Fragment>
            <Button onClick={toggleModalVisible}>Cancel</Button>
            <Button htmlType="submit" type="primary">
              Combine
            </Button>
          </React.Fragment>
        }
      >
        <CombinePlaylistsForm />
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
