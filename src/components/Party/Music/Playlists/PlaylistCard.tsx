import React from 'react';
import { Party_PlaylistsConnectionEdges } from '@generated/graphql';
import { Card, Icon } from 'antd';
import UserAvatar from '@components/UserDefaultAvatar';
import SpotifyIcon from '@customIcons/spotify.svg';
import { Colors } from '@shared/styles';

interface Props {
  playlist: NonNullable<Party_PlaylistsConnectionEdges>;
}
function PlaylistCard({ playlist }: Props) {
  const { node } = playlist;
  return (
    <Card
      hoverable={true}
      bordered={true}
      cover={<img src={node.imageUrl} />}
      actions={[
        <Icon
          component={SpotifyIcon}
          key={0}
          style={{ color: Colors.SpotifyGreen }}
          onClick={() => window.open(node.spotifyExternalUrl)}
        />,
        <Icon type="info-circle" key={1} style={{ color: Colors.AntdBlue }} />
      ]}
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
