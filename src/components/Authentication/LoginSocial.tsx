import React from 'react';
import { Button, Icon } from 'antd';
import css from '@emotion/css';
import SpotifyIcon from '@customIcons/spotify.svg';

import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import socialLoginPopup from '@shared/socialLoginPopup';

const getSocialProviderUrl = (provider: 'spotify' | 'facebook' | 'twitter') =>
  `http://localhost:4000/auth/${provider}`;

const ButtonsWrapper = styled.div`
  button {
    margin-bottom: 10px;
    border: 0;
  }
  .ant-btn > .anticon + span,
  .ant-btn > span + .anticon {
    margin-bottom: 3px;
  }
`;

const SpotifyIconStyles = css`
  svg {
    width: 24px;
    height: 24px;
  }
  color: #1db954;
  @media screen and (max-width: 1050px) {
    color: white;
  }
`;

const SpotifyButtonStyles = css`
  ${FlexBoxFullCenteredStyles}
  &:hover, &:focus {
    color: rgba(0, 0, 0, 0.65);
  }

  @media screen and (max-width: 1050px) {
    background: #1db954;
    color: white;
    &:hover,
    &:focus,
    &:active {
      background: #1db954;
      color: white;
    }
    &:disabled,
    &:disabled:hover {
      background: #1db954;
      .anticon {
        color: rgba(0, 0, 0, 0.25);
      }
    }
  }
`;

export const LoginSocial: React.FC<{ disabledFromMutation: boolean }> = ({
  disabledFromMutation
}) => {
  return (
    <ButtonsWrapper>
      <Button
        disabled={disabledFromMutation}
        block={true}
        type="default"
        size={'large'}
        onClick={async () => {
          await socialLoginPopup(getSocialProviderUrl('spotify'));
        }}
        css={[SpotifyButtonStyles]}
      >
        <Icon component={SpotifyIcon} css={[SpotifyIconStyles]} />
        Login With Spotify
      </Button>
      <Button
        disabled={disabledFromMutation}
        style={{ background: '#4267b2' }}
        block={true}
        type="primary"
        icon="facebook"
        size="large"
        onClick={async () => {
          await socialLoginPopup(getSocialProviderUrl('facebook'));
        }}
      >
        Login with Facebook
      </Button>
      <Button
        disabled={disabledFromMutation}
        type="primary"
        size="large"
        style={{ background: '#1da1f2' }}
        icon="twitter"
        block={true}
        onClick={async () => {
          await socialLoginPopup(getSocialProviderUrl('twitter'));
        }}
      >
        Login With Twitter
      </Button>
    </ButtonsWrapper>
  );
};

export default LoginSocial;
