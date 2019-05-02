import React from 'react';
import { Button, Icon } from 'antd';
import SpotifyIcon from '@customIcons/spotify.svg';
import {
  SpotifyIconStyles,
  SpotifyButtonStyles
} from '@components/Authentication/LoginSocial';
import styled from '@emotion/styled';

const ControlsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 6px;
  button {
  }
`;

interface Props {
  disabled: boolean;
  spotifyTrackId: string;
  spotifyExternalLink: string;
}

const BigMusicPlayerUserControls: React.FC = () => {
  return (
    <ControlsWrapper>
      <Button icon="plus" type="primary">
        Add to party queue
      </Button>
      <Button css={[SpotifyButtonStyles]}>
        <Icon component={SpotifyIcon} css={[SpotifyIconStyles]} />
        Listen on spotify
      </Button>
    </ControlsWrapper>
  );
};

export default BigMusicPlayerUserControls;
