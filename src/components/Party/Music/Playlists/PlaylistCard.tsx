import React from 'react';
import {
  Party_PlaylistsConnectionEdges,
  useParty_DeletePlaylist
} from '@generated/graphql';
import { Card, Icon, Modal } from 'antd';
import UserAvatar from '@components/UserDefaultAvatar';
import SpotifyIcon from '@customIcons/spotify.svg';
import { Colors } from '@shared/styles';
import { useParty } from '@components/Party/PartyProvider';
import gql from 'graphql-tag';
import { unfollowPlaylist } from 'spotify-web-sdk';

export const PARTY_DELETE_PLAYLIST_MUTATION = gql`
  mutation Party_DeletePlaylist($where: PlaylistWhereUniqueInput!) {
    deletePlaylist(where: $where) {
      id
    }
  }
`;

interface Props {
  playlist: NonNullable<Party_PlaylistsConnectionEdges>;
}
function PlaylistCard({ playlist }: Props) {
  const [deletePlaylist] = useParty_DeletePlaylist();
  const { node } = playlist;

  const { userId } = useParty();

  const isCreatedByLoggedUser = userId == node.user.id;

  function handleOnSpotifyIconClick() {
    window.open(node.spotifyExternalUrl);
  }

  function handleDeleteClick() {
    Modal.confirm({
      title: `Do you want to delete ${node.name} ?`,
      content: 'This action is irreversible',
      okType: 'danger',
      okText: 'Delete',
      onOk: async () => {
        await deletePlaylist({ variables: { where: { id: node.id } } });
        await unfollowPlaylist(node.spotifyId);
      }
    });
  }

  const baseActions = [
    <Icon
      component={SpotifyIcon}
      key={0}
      style={{ color: Colors.SpotifyGreen }}
      onClick={handleOnSpotifyIconClick}
    />,
    <Icon type="info-circle" key={1} style={{ color: Colors.AntdBlue }} />
  ];

  const actions = isCreatedByLoggedUser
    ? baseActions.concat(
        <Icon type="delete" key={2} onClick={handleDeleteClick} />
      )
    : baseActions;

  return (
    <Card
      hoverable={true}
      bordered={true}
      cover={<img src={node.imageUrl} />}
      actions={actions}
    >
      <Card.Meta
        title={node.name}
        avatar={<UserAvatar userData={node.user} />}
        description={`By ${node.user.firstName} ${node.user.lastName}`}
      />
    </Card>
  );
}

export default React.memo(PlaylistCard);
