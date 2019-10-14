import css from '@emotion/css';
import { Avatar, Badge, List, Tag, Typography } from 'antd';
import React from 'react';
import posed from 'react-pose';

const ListItemStyles = css`
  transition: transform 0.2s ease;
  padding-top: 0;
  padding-bottom: 0;
  height: 100%;
  display: flex;
  .posed-content-wrapper {
    flex: 1;
  }
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

const PosedWrapper = posed.div({
  moved: {
    x: 32
  },
  notMoved: {
    x: 0
  }
});

interface Props {
  trackPlaying: boolean;
  actions?: React.ReactNode[];
  children?: React.ReactNode;
  style?: React.CSSProperties;
  shouldMoveContent?: boolean;
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
  style,
  children,
  shouldMoveContent
}: Props) {
  return (
    <List.Item
      style={style}
      css={[ListItemStyles]}
      className={trackPlaying ? 'track-playing' : undefined}
      actions={actions}
    >
      {children}
      <PosedWrapper
        className="posed-content-wrapper"
        initialPose="notMoved"
        pose={shouldMoveContent ? 'moved' : 'notMoved'}
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
      </PosedWrapper>
    </List.Item>
  );
}

VirtualizedListTrackItem.Height = 72;

export default VirtualizedListTrackItem;
