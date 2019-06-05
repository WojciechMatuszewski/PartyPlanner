import React from 'react';
import { Track } from 'spotify-web-sdk';
import styled from '@emotion/styled';

import { Typography, Icon } from 'antd';
import TrackControls from '../../TrackControls';

const MOBILE_BREAKPOINT = '1080px';

const TopTrackTile = styled.li`
  display: flex;
  position: relative;
  height: 70px;
  border-radius: 4px;
  margin: 0 auto;
  width: 100%;
  transition: transform 0.2s ease;
  background: white;
  border: 1px solid #e8e8e8;
  padding-top: 4px;
  padding-bottom: 4px;

  &:hover,
  &:active,
  &.playing-audio {
    cursor: pointer;
    background: #e6f7ff;
  }

  &.playing-audio {
    @media screen and (min-width: ${MOBILE_BREAKPOINT}) {
      transform: scale(1.2);
      z-index: 2;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  }

  &:hover,
  &:active {
    .controls {
      opacity: 1;
    }
  }

  &.playing-audio:not(:hover) {
    .playing-indicator {
      opacity: 1;
    }
  }

  .playing-indicator {
    transition: opacity 0.2s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    font-size: 26px;
    transform: translateY(-50%);
    right: 0;
    left: 0;
    margin: auto;
    z-index: -1;
  }

  .controls {
    @media screen and (min-width: ${MOBILE_BREAKPOINT}) {
      opacity: 0;
    }
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
  min-width: 0;
  max-width: 100%;
  .ant-typography {
    margin-bottom: 0;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  p {
    max-width: 100%;
    margin-bottom: 0;
  }
`;

const ControlsWithPlayingIndicatorWrapper = styled.div`
  margin-left: auto;
  height: 100%;
  position: relative;
`;

interface Props {
  track: Track;
  trackPlaying: boolean;
  onPlayClick: (track: Track) => void;
  onMoreInfoClick: (track: Track) => void;
  style?: React.CSSProperties;
}

const UserTopTrack: React.FC<Props> = props => {
  return (
    <TopTrackTile
      style={props.style}
      className={
        props.trackPlaying ? 'playing-audio user-top-track' : 'user-top-track'
      }
    >
      <TrackTileImageWrapper>
        <img
          src={
            props.track.album.images[props.track.album.images.length - 1].url
          }
        />
      </TrackTileImageWrapper>
      <TrackTileInfoWrapper>
        <Typography.Paragraph ellipsis={true} strong={true}>
          {props.track.name}
        </Typography.Paragraph>
        <Typography.Paragraph ellipsis={true}>
          {props.track.artists[0].name}
        </Typography.Paragraph>
        <Typography.Paragraph type="secondary" ellipsis={true}>
          {formatTrackDuration(props.track.durationMs)}
        </Typography.Paragraph>
      </TrackTileInfoWrapper>

      <ControlsWithPlayingIndicatorWrapper>
        <TrackControls
          className="controls"
          trackPlaying={props.trackPlaying}
          onMoreInfoClick={() => props.onMoreInfoClick(props.track)}
          onTogglePlayClick={() => props.onPlayClick(props.track)}
          hasPreviewUrl={hasPreviewUrl()}
        />
        <Icon type="sound" className="playing-indicator" theme="twoTone" />
      </ControlsWithPlayingIndicatorWrapper>
    </TopTrackTile>
  );

  function hasPreviewUrl() {
    return (
      props.track.previewUrl != null && props.track.previewUrl.trim().length > 0
    );
  }

  function formatTrackDuration(msDuration: number) {
    const minutes = Math.floor(msDuration / 60000);
    const seconds = Math.floor((msDuration % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
};

export default React.memo(UserTopTrack);
