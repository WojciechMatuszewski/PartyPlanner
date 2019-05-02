import React from 'react';
import { Button, Icon } from 'antd';
import styled from '@emotion/styled';

const ControlsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  @media screen and (max-width: 800px) {
    grid-template-rows: 1fr;
    grid-template-columns: min-content min-content;
  }
  grid-gap: 6px;
  button {
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
      <Button size={props.isOnMobile ? 'small' : 'default'} type="primary">
        {!props.isOnMobile ? 'Add to party queue' : null}
        <Icon type="plus" />
      </Button>
      <Button
        size={props.isOnMobile ? 'small' : 'default'}
        icon={props.isOnMobile ? 'more' : undefined}
      >
        {!props.isOnMobile ? 'More options' : null}
      </Button>
    </ControlsWrapper>
  );
};

export default BigMusicPlayerUserControls;
