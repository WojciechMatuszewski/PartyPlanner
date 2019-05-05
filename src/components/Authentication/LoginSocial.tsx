import React from 'react';
import { Button, Icon } from 'antd';
import css from '@emotion/css';
import SpotifyIcon from '@customIcons/spotify.svg';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import socialLoginPopup from '@shared/socialLoginPopup';
import { handleLogin } from './AuthService';
import { WithRouterProps } from 'next/router';

const getSocialProviderUrl = (provider: 'spotify' | 'facebook' | 'twitter') =>
  `${process.env.BACKEND_URL}/auth/${provider}`;

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

export const SpotifyIconStyles = css`
  svg {
    width: 24px;
    height: 24px;
  }
  color: #1db954;
  @media screen and (max-width: 1050px) {
    color: white;
  }
`;

export const SpotifyButtonStyles = css`
  ${FlexBoxFullCenteredStyles}

  &:hover, &:focus, &:active {
    color: rgba(0, 0, 0, 0.65);
    border-color: white;
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

export const LoginSocial: React.FC<
  { disabledFromMutation: boolean } & WithRouterProps
> = ({ disabledFromMutation }) => {
  async function handleSocialLogin(
    provider: 'spotify' | 'twitter' | 'facebook'
  ) {
    try {
      const token = await socialLoginPopup(getSocialProviderUrl(provider));
      handleLogin(token);
    } catch (e) {
      // empty for now, it's being handled by popup
    }
  }

  return (
    <ButtonsWrapper>
      <Button
        disabled={disabledFromMutation}
        block={true}
        type="default"
        size={'large'}
        onClick={async () => await handleSocialLogin('spotify')}
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
        onClick={async () => await handleSocialLogin('facebook')}
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
        onClick={async () => await handleSocialLogin('twitter')}
      >
        Login With Twitter
      </Button>
    </ButtonsWrapper>
  );
};

export default LoginSocial;
