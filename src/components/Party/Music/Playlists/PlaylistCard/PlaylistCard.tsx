import PlaylistEdit from '../PlaylistEdit/PlaylistEdit';
import PlaylistInfo from '../PlaylistInfo';
import PlaylistCardSelected from './PlaylistCardSelected';

import { useParty } from '@components/Party/PartyProvider';
import UserAvatar from '@components/User/UserDefaultAvatar';
import SpotifyIcon from '@customIcons/spotify.svg';
import css from '@emotion/css';
import styled from '@emotion/styled';
import { Party_PlaylistsConnectionEdges } from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { Colors } from '@shared/styles';
import { Card, Icon, Typography } from 'antd';
import { always, ifElse } from 'ramda';
import React from 'react';
import posed, { PoseGroup } from 'react-pose';

const SelectingIndicator = styled(
  posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 0, opacity: 0 }
  })
)`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  h3 {
    color: white;
    padding: 12px;
    margin: 0;
  }
  justify-content: center;
`;
const CardStyles = css`
  .ant-card-cover {
    position: relative;
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
  const { node } = playlist;

  const { userId } = useParty();

  const isCreatedByLoggedUser = userId == node.user.id;

  function handleOnSpotifyIconClick() {
    window.open(node.spotifyExternalUrl);
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
    <PlaylistInfo key={1} playlist={playlist.node} />
  ];

  const actions = isCreatedByLoggedUser
    ? baseActions.concat(<PlaylistEdit playlist={playlist} />)
    : baseActions;

  return (
    <li
      style={{
        listStyleType: 'none',
        position: 'relative'
      }}
    >
      <Card
        css={[CardStyles]}
        hoverable={true}
        bordered={true}
        cover={
          <React.Fragment>
            <PoseGroup>
              {selecting && !isSelected && (
                <SelectingIndicator key={1} onClick={onPlaylistCardClicked}>
                  <Typography.Title level={3}>Click to select</Typography.Title>
                </SelectingIndicator>
              )}
            </PoseGroup>
            <img src={node.imageUrl} key={2} />
            {!playlist.node.importable && <Icon type="lock" />}
          </React.Fragment>
        }
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
