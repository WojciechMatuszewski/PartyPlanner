import PlaylistCardSelected from './PlaylistCardSelected';
import PlaylistInfo from './PlaylistInfo';
import {
  getPartyPlaylistConnectionVariables,
  PARTY_PLAYLISTS_CONNECTION_QUERY
} from './Playlists';

import { useParty } from '@components/Party/PartyProvider';
import UserAvatar from '@components/UserDefaultAvatar';
import SpotifyIcon from '@customIcons/spotify.svg';
import {
  Party_PlaylistsConnectionEdges,
  useParty_DeletePlaylist
} from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { Colors } from '@shared/styles';
import { Card, Icon, message, Modal } from 'antd';
import gql from 'graphql-tag';
import { always, ifElse } from 'ramda';
import React from 'react';
import { unfollowPlaylist } from 'spotify-web-sdk';

export const PARTY_DELETE_PLAYLIST_MUTATION = gql`
  mutation Party_DeletePlaylist($where: PlaylistWhereUniqueInput!) {
    deletePlaylist(where: $where) {
      id
    }
  }
`;

interface Props {
  playlist: DeepWithoutMaybe<Party_PlaylistsConnectionEdges>;
  selecting: boolean;
  onPlaylistCardSelected: (
    playlist: DeepWithoutMaybe<Party_PlaylistsConnectionEdges>
  ) => void;
  isSelected: boolean;
  onPlaylistCardDeselected: (
    playlist: DeepWithoutMaybe<Party_PlaylistsConnectionEdges>
  ) => void;
}
function PlaylistCard({
  playlist,
  selecting,
  onPlaylistCardSelected,
  isSelected,
  onPlaylistCardDeselected
}: Props) {
  const [deletePlaylist, { loading }] = useParty_DeletePlaylist();
  const { node } = playlist;

  const { userId } = useParty();

  const isCreatedByLoggedUser = userId == node.user.id;

  function handleOnSpotifyIconClick() {
    window.open(node.spotifyExternalUrl);
  }

  async function handlePlaylistDelete() {
    try {
      await unfollowPlaylist(node.spotifyId);
      await deletePlaylist({
        variables: { where: { id: node.id } },
        refetchQueries: [
          {
            query: PARTY_PLAYLISTS_CONNECTION_QUERY,
            variables: getPartyPlaylistConnectionVariables()
          }
        ]
      });
    } catch (e) {
      message.error('Something went wrong, try again!');
    }
  }

  function handleDeleteClick() {
    Modal.confirm({
      title: `Do you want to delete ${node.name} ?`,
      content: 'This action is irreversible',
      okType: 'danger',
      okText: 'Delete',
      onOk: async () => await handlePlaylistDelete()
    });
  }

  const onPlaylistCardClicked = ifElse(
    always(selecting),
    () => onPlaylistCardSelected(playlist),
    () => {}
  );

  const baseActions = [
    <Icon
      component={SpotifyIcon}
      key={0}
      style={{ color: Colors.SpotifyGreen }}
      onClick={handleOnSpotifyIconClick}
    />,
    <PlaylistInfo
      key={1}
      playlist={playlist.node}
      onDelete={handlePlaylistDelete}
      loading={loading}
    />
  ];

  const actions = isCreatedByLoggedUser
    ? baseActions.concat(
        <Icon type="delete" key={2} onClick={handleDeleteClick} />
      )
    : baseActions;

  return (
    <li
      onClick={onPlaylistCardClicked}
      style={{
        listStyleType: 'none',
        position: 'relative'
      }}
    >
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
      <PlaylistCardSelected
        visible={isSelected}
        onDeselect={() => onPlaylistCardDeselected(playlist)}
      />
    </li>
  );
}

export default React.memo(PlaylistCard);
