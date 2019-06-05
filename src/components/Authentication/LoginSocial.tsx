import React from 'react';
import { Button, Icon } from 'antd';
import css from '@emotion/css';
import SpotifyIcon from '@customIcons/spotify.svg';
import styled from '@emotion/styled';
import {
  FlexBoxFullCenteredStyles,
  GreenSpotifyButtonStyles,
  WhiteSpotifyButtonStyles
} from '@shared/styles';
import socialLoginPopup from '@shared/socialLoginPopup';
import { handleLogin } from '@services/AuthService';
import { WithRouterProps } from 'next/router';

export const getSocialProviderUrl = (
  provider: 'spotify' | 'facebook' | 'twitter'
) => `${process.env.NEXT_STATIC_ENDPOINT_URL}/auth/${provider}`;

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
  ${WhiteSpotifyButtonStyles};
  ${FlexBoxFullCenteredStyles};
  @media screen and (max-width: 1050px) {
    ${GreenSpotifyButtonStyles};
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
