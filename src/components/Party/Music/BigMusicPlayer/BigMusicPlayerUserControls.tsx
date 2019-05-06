import React from 'react';
import { Button, Icon } from 'antd';
import styled from '@emotion/styled';
import { TransparentButtonStyles } from '@shared/styles';

const ControlsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 6px;
  @media screen and (max-width: 800px) {
    grid-template-rows: 1fr;
    grid-template-columns: min-content min-content;
    margin-left: auto;
    grid-gap: 0;
    button {
    }
  }
`;

interface Props {
  isOnMobile: boolean;
  // disabled: boolean;
  // spotifyTrackId: string;
  // spotifyExternalLink: string;
}

const BigMusicPlayerUserControls: React.FC<Props> = props => {
  return (
    <ControlsWrapper>
      {!props.isOnMobile ? (
        <Button type="primary">
          Add to party queue
          <Icon type="plus" />
        </Button>
      ) : (
        <button css={[TransparentButtonStyles]}>
          <Icon type="plus" />
        </button>
      )}
      {!props.isOnMobile ? (
        <Button>More options</Button>
      ) : (
        <button css={[TransparentButtonStyles]}>
          <Icon type="more" />
        </button>
      )}
    </ControlsWrapper>
  );
};

export default React.memo(BigMusicPlayerUserControls);
