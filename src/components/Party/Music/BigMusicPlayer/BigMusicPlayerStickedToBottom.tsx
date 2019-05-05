import React from 'react';
import { useBigMusicPlayer } from './BigMusicPlayerProvider';
import css from '@emotion/css';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { Button } from 'antd';
import BigMusicPlayer from './BigMusicPlayer';

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
  background: #f0f1f5;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 0 12px;
  border-top: 1px solid #e8e8e8;
  display: flex;
  flex: 1;
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
  background: #f0f1f5;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid #f0f1f5 !important;
  box-shadow: none;
`;

const BigMusicPlayerStickedToBottom: React.FC = () => {
  const { playerState } = useBigMusicPlayer();
  const [visible, setVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (playerState == 'loading' && !visible) setVisible(true);
  }, [playerState, visible]);

  return (
    <StickedToBottom pose={visible ? 'visible' : 'hidden'}>
      <Button
        icon={visible ? 'caret-down' : 'caret-up'}
        css={[StickedVisibilityTriggerStyles]}
        onClick={handleVisibilityTriggerClick}
      >
        Music Player
      </Button>
      <BigMusicPlayer />
    </StickedToBottom>
  );

  function handleVisibilityTriggerClick() {
    setVisible(prev => !prev);
  }
};

export default BigMusicPlayerStickedToBottom;
