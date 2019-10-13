import css from '@emotion/css';
import { Avatar, Badge, List, Tag, Typography } from 'antd';
import React from 'react';

const ListItemStyles = css`
  transition: transform 0.2s ease;
  padding-top: 0;
  padding-bottom: 0;
  height: 100%;
  &.track-playing,
  &:hover {
    background: #e6f7ff;
  }
  height: 72px;
  .ant-list-item-meta {
    max-width: 100%;
    min-width: 0;
  }

  .ant-list-item-meta-content {
    white-space: nowrap;
    min-width: 0;
    & > * {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .ant-list-item-meta-description {
    line-height: 1;
  }

  @media screen and (max-width: 680px) {
    padding-left: 6px !important;
    padding-right: 6px !important;
  }
`;

interface Props {
  trackPlaying: boolean;
  actions?: React.ReactNode[];
  style?: React.CSSProperties;
  track: {
    name: string;
    imageUrl: string;
    explicit: boolean;
    artists: string;
    length: string;
  };
}
function VirtualizedListTrackItem({
  trackPlaying,
  actions,
  track,
  style
}: Props) {
  return (
    <List.Item
      style={style}
      css={[ListItemStyles]}
      className={trackPlaying ? 'track-playing' : undefined}
      actions={actions}
    >
      <List.Item.Meta
        title={track.name}
        avatar={
          <Avatar
            style={{ width: 48, height: 48 }}
            src={track.imageUrl}
            shape="square"
          />
        }
        description={
          <Typography.Text ellipsis={true}>
            {track.explicit && <Tag color="magenta">E</Tag>}
            {track.artists}
            <Badge
              style={{ marginLeft: 8 }}
              status="default"
              color="blue"
              text={track.length}
            />
          </Typography.Text>
        }
      />
    </List.Item>
  );
}

VirtualizedListTrackItem.Height = 72;

export default VirtualizedListTrackItem;
