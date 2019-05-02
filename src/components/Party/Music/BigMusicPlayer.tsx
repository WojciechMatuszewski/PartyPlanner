import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import {
  FlexBoxFullCenteredStyles,
  FlexBoxHorizontallyCenteredStyles
} from '@shared/styles';
import { useAudio } from '@hooks/useAudio';
import { Icon, Button, Typography, Slider, Tooltip } from 'antd';
import BigMusicPlayerUserControls from './BigMusicPlayerUserControls';

const BigMusicPlayerWrapper = styled(
  posed.div({
    loading: {
      opacity: 0.2
    },
    loaded: {
      opacity: 1
    }
  })
)`
  width: 100%;
  height: 100%;
  ${FlexBoxFullCenteredStyles};
`;

const BottomInnerWrapper = styled.div`
  padding: 12px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const TransparentButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  display: inline-block;
  margin-top: 6px;
  .anticon {
    font-size: 20px;
  }
`;

const ControlButtonsWrapper = styled.div`
  padding-bottom: 6px;
  ${FlexBoxFullCenteredStyles};
  .play-pause-button {
    margin-left: 12px;
    margin-right: 12px;
  }
`;

const SliderWrapper = styled.div`
  ${FlexBoxFullCenteredStyles};
  width: 100%;
  .ant-slider-track {
    background: #66d26e;
  }

  .ant-slider-rail {
    background: #e1e1e1;
  }

  .ant-slider-handle {
    border: solid 2px #66d26e;
    &:focus {
      border-color: #48aa58;
    }
  }
  .ant-slider:hover {
    .ant-slider-track {
      background: #48aa58;
    }
  }
  .ant-slider {
    margin: 0;
    flex: 1;
  }
  & > span {
    font-size: 12px;
    display: inline-block;
    padding: 0 12px;
    font-feature-settings: 'tnum';
    font-variant-numeric: tabular-nums;
  }
`;

const TrackInfoWrapper = styled.div`
  height: 64px;
  display: flex;
  .track-info-text {
    padding-left: 12px;
    ${FlexBoxHorizontallyCenteredStyles};
    text-align: left;
    flex-direction: column;
    h4 {
      margin: 0;
    }
  }
`;

const BigMusicPlayer: React.FC = () => {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const {
    play,
    pause,
    setTime,
    skip,
    toggle,
    state: { audioCurrentTime, audioDuration, loading, playing }
  } = useAudio(audioRef, false);

  return (
    <BigMusicPlayerWrapper pose={loading ? 'loading' : 'loaded'}>
      <TrackInfoWrapper>
        <img src="https://i.scdn.co/image/81a3f82578dc938c53efdcb405f6a3d3ebbf009f" />
        <div className="track-info-text">
          <Typography.Title level={4}>Title</Typography.Title>
          <a>Artist Name</a>
        </div>
      </TrackInfoWrapper>
      <BottomInnerWrapper>
        <ControlButtonsWrapper>
          <Tooltip title="Fast backwards by 5 seconds">
            <TransparentButton
              disabled={loading}
              onClick={() => skip(-5, !playing)}
            >
              <Icon type="fast-backward" />
            </TransparentButton>
          </Tooltip>
          <Button
            onClick={toggle}
            disabled={loading}
            icon={playing ? 'pause' : 'caret-right'}
            shape="circle"
            size="large"
            className="play-pause-button"
          />
          <Tooltip trigger="hover" title="Fast forward by 5 seconds">
            <TransparentButton
              onClick={() => skip(5, !playing)}
              disabled={loading}
            >
              <Icon type="fast-forward" />
            </TransparentButton>
          </Tooltip>
        </ControlButtonsWrapper>
        <SliderWrapper>
          <audio
            src="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86"
            ref={audioRef}
            controls={false}
            preload="auto"
          />
          <Typography.Text type="secondary">
            0:
            {audioCurrentTime < 10 ? `0${audioCurrentTime}` : audioCurrentTime}
          </Typography.Text>
          <Slider
            disabled={loading}
            max={audioDuration}
            value={audioCurrentTime}
          />
          <Typography.Text type="secondary">0:{audioDuration}</Typography.Text>
        </SliderWrapper>
      </BottomInnerWrapper>
      <BigMusicPlayerUserControls />
    </BigMusicPlayerWrapper>
  );
};

export default BigMusicPlayer;
