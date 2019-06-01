import React from 'react';
import { Track } from 'spotify-web-sdk';
import { List, Avatar, Badge, Tag } from 'antd';
import TrackControls from '../TrackControls';
import css from '@emotion/css';

interface Props {
  track: Track;
  style?: React.CSSProperties;
  trackPlaying: boolean;
  onTogglePlayClick: (track: Track) => void;
  onMoreInfoClick: (track: Track) => void;
}

const ListItemStyles = css`
  transition: transform 0.2s ease;
  &.track-playing {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transform: scale(0.99);
    border-radius: 4px;
    background: #e6f7ff;
    .ant-list-item-meta {
      transform: translateX(12px);
    }
  }
  height: 72px;
`;

export default function DiscoverTrack(props: Props) {
  return (
    <List.Item
      css={[ListItemStyles]}
      className={props.trackPlaying ? 'track-playing' : undefined}
      actions={[
        <TrackControls
          key={1}
          onMoreInfoClick={handleMoreInfoClick}
          onTogglePlayClick={handleTogglePlayClick}
          trackPlaying={props.trackPlaying}
          hasPreviewUrl={props.track.previewUrl != null}
        />
      ]}
    >
      <List.Item.Meta
        avatar={
          <Avatar
            style={{ width: 48, height: 48 }}
            src={props.track.album.imageUrl}
            shape="square"
          />
        }
        title={props.track.name}
        description={
          <span>
            {props.track.explicit && <Tag color="magenta">E</Tag>}
            {props.track.album.artists.map(artist => artist.name).join(', ')}
            <Badge
              style={{ marginLeft: 8 }}
              status="default"
              color="blue"
              text={props.track.length}
            />
          </span>
        }
      />
    </List.Item>
  );

  function handleTogglePlayClick() {
    props.onTogglePlayClick(props.track);
  }
  function handleMoreInfoClick() {
    props.onMoreInfoClick(props.track);
  }
}
