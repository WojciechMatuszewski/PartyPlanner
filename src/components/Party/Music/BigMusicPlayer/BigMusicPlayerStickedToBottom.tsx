import React from 'react';
import { useBigMusicPlayer } from './BigMusicPlayerProvider';
import css from '@emotion/css';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { Button, Icon } from 'antd';
import BigMusicPlayer from './BigMusicPlayer';
import { Track } from 'spotify-web-sdk';

const StickedToBottom = styled(
  posed.div({
    visible: {
      y: 0,
      transition: {
        ease: 'linear',
        duration: 100
      }
    },
    hidden: {
      y: 100,
      transition: {
        ease: 'linear',
        duration: 100
      }
    }
  })
)`
  background: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 0 12px;
  border-top: 1px solid #e8e8e8;
  display: flex;
  flex: 1;
  transform: translateY(100%);
  z-index: 10;
`;

const StickedVisibilityTriggerStyles = css`
  position: absolute;
  top: 0;
  right: 12px;
  width: 178.2px;
  height: 30px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transform: translateY(-100%);
  background: white;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid white !important;
  box-shadow: none;
`;

interface Props {
  onTrackChanged: () => void;
  onVisibilityTriggerClicked: () => void;
  visible: boolean;
}

const BigMusicPlayerStickedToBottom: React.FC<Props> = props => {
  const { track, playerState } = useBigMusicPlayer();
  const previousTrackRef = React.useRef<Track | null>(track);

  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!track) return;
    if (!previousTrackRef.current || previousTrackRef.current.id !== track.id) {
      previousTrackRef.current = track;
      props.onTrackChanged();
    }
  }, [track]);

  return (
    <StickedToBottom
      ref={wrapperRef}
      pose={props.visible ? 'visible' : 'hidden'}
    >
      <Button
        icon={props.visible ? 'caret-down' : 'caret-up'}
        css={[StickedVisibilityTriggerStyles]}
        onClick={props.onVisibilityTriggerClicked}
      >
        Music Player
        {playerState === 'playing' && !props.visible && (
          <Icon type="sound" theme="twoTone" />
        )}
      </Button>
      <BigMusicPlayer />
    </StickedToBottom>
  );
};

export default BigMusicPlayerStickedToBottom;
