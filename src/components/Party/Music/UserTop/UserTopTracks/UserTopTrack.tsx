import React from 'react';
import { Track } from 'spotify-web-sdk';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { Button, Typography } from 'antd';
import { useBigMusicPlayer } from '../../BigMusicPlayer/BigMusicPlayerProvider';

const TopTrackTile = styled(
  posed.div({
    hoverable: true
  })
)`
  display: flex;
  position: relative;
  height: 64px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background: #e6f7ff;
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
    init: { opacity: 0 },
    hover: { opacity: 1 }
  })
)`
  ${FlexBoxFullCenteredStyles};
  padding-left: 12px;
  padding-right: 8px;
  margin-left: auto;
  flex-direction: column;
  button {
    width: 20px !important;
    height: 20px !important;
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
}
const UserTopTrack: React.FC<Props> = props => {
  return (
    <TopTrackTile key={props.track.id}>
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
      <TrackTileControlsWrapper>
        <Button
          icon={props.trackPlaying ? 'pause' : 'caret-right'}
          type="ghost"
          shape="circle-outline"
          size="small"
          onClick={() => props.onPlayClick(props.track)}
        />
        <Button
          icon="ellipsis"
          type="ghost"
          size="small"
          shape="circle-outline"
        />
      </TrackTileControlsWrapper>
    </TopTrackTile>
  );
};

export default React.memo(UserTopTrack);
