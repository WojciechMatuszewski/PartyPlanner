import {
  getPartyPlaylistConnectionVariables,
  PARTY_PLAYLISTS_CONNECTION_QUERY
} from '../Playlists';
import PlaylistEditForm from './PlaylistEditForm';

import {
  Party_PlaylistsConnectionEdges,
  useParty_DeletePlaylist,
  useParty_EditPlaylist
} from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { Button, Icon, message, Modal } from 'antd';
import gql from 'graphql-tag';
import React from 'react';

interface Props {
  playlist: DeepWithoutMaybe<Party_PlaylistsConnectionEdges>;
}

export const PARTY_EDIT_PLAYLIST_MUTATION = gql`
  mutation Party_EditPlaylist(
    $data: PlaylistUpdateInput!
    $where: PlaylistWhereUniqueInput!
  ) {
    updatePlaylist(data: $data, where: $where) {
      id
      importable
    }
  }
`;

export const PARTY_DELETE_PLAYLIST_MUTATION = gql`
  mutation Party_DeletePlaylist($where: PlaylistWhereUniqueInput!) {
    deletePlaylist(where: $where) {
      id
    }
  }
`;

const EditPlaylistCacheFragment = gql`
  fragment EditPlaylistCacheFragment on Playlist {
    name
    importable
  }
`;

export default function PlaylistEdit({ playlist }: Props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const toggleModal = () => setModalVisible(prev => !prev);

  const [deletePlaylist, { loading: deleteLoading }] = useParty_DeletePlaylist({
    onCompleted: () => {
      message.info('Playlist deleted');
      toggleModal();
    },
    onError: () => message.error('Something went wrong, try again!'),
    variables: { where: { id: playlist.node.id } },
    refetchQueries: [
      {
        query: PARTY_PLAYLISTS_CONNECTION_QUERY,
        variables: getPartyPlaylistConnectionVariables()
      }
    ],
    awaitRefetchQueries: true
  });

  function handleDeleteClick() {
    Modal.confirm({
      title: `Do you want to delete ${playlist.node.name} ?`,
      content: 'This action is irreversible',
      okType: 'danger',
      okText: 'Delete',
      onOk: deletePlaylist
    });
  }

  const [editPlaylist, { loading: editLoading }] = useParty_EditPlaylist({
    onCompleted: () => message.success('Playlist edited!'),
    onError: () => message.error('Something went wrong, try again!')
  });

  const isPerformingWork = deleteLoading || editLoading;

  return (
    <React.Fragment>
      <Icon type="edit" onClick={toggleModal} />
      <Modal
        centered={true}
        visible={modalVisible}
        closable={!isPerformingWork}
        onCancel={toggleModal}
        onOk={toggleModal}
        title="Edit created playlist"
      >
        <PlaylistEditForm
          loading={editLoading}
          onSubmit={values =>
            editPlaylist({
              variables: {
                where: { id: playlist.node.id },
                data: {
                  name: values.playlistName,
                  importable: !values.notImportable
                }
              },
              update: proxy => {
                proxy.writeFragment({
                  fragment: EditPlaylistCacheFragment,
                  id: `Playlist:${playlist.node.id}`,
                  data: {
                    __typename: 'Playlist',
                    name: values.playlistName,
                    importable: !values.notImportable
                  }
                });
              }
            })
          }
          disabled={deleteLoading}
          playlist={playlist}
        />
        <div
          style={{ margin: '24px 0', height: 1, border: '1px dashed #d9d9d9' }}
        />
        <Button
          disabled={editLoading}
          loading={deleteLoading}
          onClick={handleDeleteClick}
          type="danger"
        >
          Delete this playlist
        </Button>
      </Modal>
    </React.Fragment>
  );
}
