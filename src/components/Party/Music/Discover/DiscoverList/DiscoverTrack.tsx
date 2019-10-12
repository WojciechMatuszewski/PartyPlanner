import { useParty } from '@components/Party/PartyProvider';
import css from '@emotion/css';
import { useAddTrackToParty } from '@generated/graphql';
import { Avatar, Badge, List, message, Tag, Typography } from 'antd';
import React from 'react';
import { Track } from 'spotify-web-sdk';

import {
  AddToQueueTrackButton,
  MoreInfoTrackButton,
  PlayPauseTrackButton
} from '../../TrackControls';

interface Props {
  track: Track;
  style?: React.CSSProperties;
  trackPlaying: boolean;
  onTogglePlayClick: (track: Track) => void;
  onMoreInfoClick: (track: Track) => void;
}

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

function DiscoverTrack(props: Props) {
  const { partyId } = useParty();

  const { track } = props;

  const [mutate, { loading }] = useAddTrackToParty({
    variables: {
      data: {
        spotifyId: track.id,
        name: track.name,
        downVotes: 0,
        upVotes: 1,
        duration: track.durationMs,
        preview_url: track.previewUrl,
        imageUrl: track.album.imageUrl,
        party: { connect: { id: partyId } }
      }
    },
    onCompleted: () => message.success('Track successfully added!'),
    onError: () => message.error('Could not add track to given party playlist!')
  });

  return (
    <List.Item
      style={props.style}
      css={[ListItemStyles]}
      className={props.trackPlaying ? 'track-playing' : undefined}
      actions={[
        <PlayPauseTrackButton
          onTogglePlayClick={handleTogglePlayClick}
          key={1}
          trackPlaying={props.trackPlaying}
          hasPreviewUrl={props.track.previewUrl != null}
        />,
        <MoreInfoTrackButton onMoreInfoClick={handleMoreInfoClick} key={2} />,
        <AddToQueueTrackButton
          key={3}
          onAddToQueueClick={mutate}
          loading={loading}
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
          <Typography.Text ellipsis={true}>
            {props.track.explicit && <Tag color="magenta">E</Tag>}
            {props.track.album.artists.map(artist => artist.name).join(', ')}
            <Badge
              style={{ marginLeft: 8 }}
              status="default"
              color="blue"
              text={props.track.length}
            />
          </Typography.Text>
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

export default React.memo(DiscoverTrack);
