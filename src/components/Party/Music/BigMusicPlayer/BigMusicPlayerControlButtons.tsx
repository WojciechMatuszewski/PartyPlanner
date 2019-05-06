import React from 'react';
import { UseAudioApi } from '@hooks/useAudio';
import { Tooltip, Icon, Button } from 'antd';
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
      <Tooltip title="Fast backwards by 5 seconds">
        <TransparentButton
          disabled={props.disabled}
          onClick={handleBackwardsSkip}
        >
          <Icon type="fast-backward" />
        </TransparentButton>
      </Tooltip>
      <Button
        onClick={props.toggle}
        disabled={props.disabled}
        icon={props.playing ? 'pause' : 'caret-right'}
        shape="circle"
        size={!props.isOnMobile ? 'large' : 'default'}
        className="play-pause-button"
      />
      <Tooltip trigger="hover" title="Fast forward by 5 seconds">
        <TransparentButton
          onClick={handleForwardSkip}
          disabled={props.disabled}
        >
          <Icon type="fast-forward" />
        </TransparentButton>
      </Tooltip>
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
