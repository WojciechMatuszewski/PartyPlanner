import React from 'react';
import { Track } from 'spotify-web-sdk';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { Button, Typography } from 'antd';
import useMedia from '@hooks/useMedia';

const TopTrackTile = styled(
  posed.div({
    hoverable: true,
    playing: {
      scale: (props: { isOnMobile: boolean }) => (props.isOnMobile ? 1 : 1.2)
    },
    notPlaying: {
      scale: 1.0
    }
  })
)`
  display: flex;
  position: relative;
  height: 64px;
  border-radius: 4px;
  margin: 0 auto;
  width: 100%;
  &:hover,
  &.playing-audio {
    cursor: pointer;
    background: #e6f7ff;
  }
  &.playing-audio {
    z-index: 2;
  }
  &.first-column {
    transform-origin: center left;
  }
  &.last-column {
    transform-origin: center-right;
  }
`;

const TrackTileImageWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0;
  width: 72px;
  height: 72px;
  top: 50%;
  transform: translateY(-50%);
  img {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const TrackTileInfoWrapper = styled.div`
  padding-left: calc(72px + 8px);

  max-width: 100%;
  .ant-typography {
    margin-bottom: 0;
  }
  p {
    max-width: 100%;
    margin-bottom: 0;
  }
`;
const TrackTileControlsWrapper = styled(
  posed.div({
    init: {
      opacity: (props: { shouldIgnoreHover: boolean }) =>
        props.shouldIgnoreHover ? 1 : 0
    },
    hover: {
      opacity: 1
    }
  })
)`
  ${FlexBoxFullCenteredStyles};
  padding-left: 12px;
  padding-right: 8px;
  margin-left: auto;
  flex-direction: column;

  button {
    width: 22px !important;
    height: 22px !important;
    border: 1px solid rgba(0, 0, 0, 0.65);
    .anticon {
      ${FlexBoxFullCenteredStyles};
    }
  }
  button:first-of-type {
    margin-bottom: 4px;
  }
`;

interface Props {
  track: Track;
  trackPlaying: boolean;
  onPlayClick: (track: Track) => void;
  onMoreInfoClick: (track: Track) => void;
}

const UserTopTrack: React.FC<Props> = props => {
  const isOnMobile = useMedia('(max-width:971px)');

  return (
    <TopTrackTile
      key={isOnMobile ? 1 : 0}
      className={
        props.trackPlaying
          ? ['playing-audio', 'user-top-track-grid-item'].join(' ')
          : 'user-top-track-grid-item'
      }
      isOnMobile={isOnMobile}
      pose={props.trackPlaying ? 'playing' : 'notPlaying'}
    >
      <TrackTileImageWrapper>
        <img src={props.track.album.images[1].url} />
      </TrackTileImageWrapper>
      <TrackTileInfoWrapper>
        <Typography.Paragraph ellipsis={true}>
          <p>{props.track.name}</p>
        </Typography.Paragraph>
        <Typography.Paragraph type="secondary" ellipsis={true}>
          <p>{props.track.artists[0].name}</p>
        </Typography.Paragraph>
        <Typography.Paragraph type="secondary" ellipsis={true}>
          <p>{props.track.length}</p>
        </Typography.Paragraph>
      </TrackTileInfoWrapper>

      <TrackTileControlsWrapper
        style={{ opacity: isOnMobile ? 1 : 0 }}
        shouldIgnoreHover={isOnMobile}
      >
        <Button
          icon={props.trackPlaying ? 'pause' : 'caret-right'}
          type="ghost"
          shape="circle-outline"
          size="small"
          disabled={!hasPreviewUrl()}
          onClick={() => props.onPlayClick(props.track)}
        />
        <Button
          onClick={() => props.onMoreInfoClick(props.track)}
          icon="ellipsis"
          type="ghost"
          size="small"
          shape="circle-outline"
        />
      </TrackTileControlsWrapper>
    </TopTrackTile>
  );

  function hasPreviewUrl() {
    return (
      props.track.previewUrl != null && props.track.previewUrl.trim().length > 0
    );
  }
};

export default React.memo(UserTopTrack);
