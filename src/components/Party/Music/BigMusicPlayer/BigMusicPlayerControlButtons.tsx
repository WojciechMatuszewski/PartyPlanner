import React from 'react';
import { UseAudioApi } from '@hooks/useAudio';
import { Icon, Button } from 'antd';
import { TransparentButtonStyles } from '@shared/styles';
import styled from '@emotion/styled';

const SKIP_AMOUNT = 5;

const TransparentButton = styled.button`
  ${TransparentButtonStyles};
  margin-top: 6px;
  .anticon {
    font-size: 20px;
  }
`;

interface Props {
  isOnMobile: boolean;
  skip: UseAudioApi['skip'];
  playing: boolean;
  disabled: boolean;
  toggle: UseAudioApi['toggle'];
}
const BigMusicPlayerControlButtons: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <TransparentButton
        disabled={props.disabled}
        onClick={handleBackwardsSkip}
      >
        <Icon type="fast-backward" />
      </TransparentButton>

      <Button
        onClick={props.toggle}
        disabled={props.disabled}
        icon={props.playing ? 'pause' : 'caret-right'}
        shape="circle"
        size={!props.isOnMobile ? 'large' : 'default'}
        className="play-pause-button"
      />

      <TransparentButton onClick={handleForwardSkip} disabled={props.disabled}>
        <Icon type="fast-forward" />
      </TransparentButton>
    </React.Fragment>
  );

  function handleForwardSkip() {
    props.skip(SKIP_AMOUNT, !props.playing);
  }

  function handleBackwardsSkip() {
    props.skip(-SKIP_AMOUNT, !props.playing);
  }
};

export default BigMusicPlayerControlButtons;
