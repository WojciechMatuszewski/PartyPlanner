import React from 'react';
import styled from '@emotion/styled';
import socialLoginPopup from '@shared/socialLoginPopup';
import { handleLogin } from '@services/AuthService';
import { WithRouterProps } from 'next/router';
import SpotifyButton from '@components/UI/SpotifyButton';
import FacebookButton from '@components/UI/FacebookButton';
import TwitterButton from '@components/UI/TwitterButton';
import { message } from 'antd';

export const getSocialProviderUrl = (
  provider: 'spotify' | 'facebook' | 'twitter'
) => `${process.env.NEXT_PUBLIC_ENDPOINT_URL}/auth/${provider}`;

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

export const LoginSocial: React.FC<{
  disabledFromMutation: boolean;
} & WithRouterProps> = ({ disabledFromMutation }) => {
  async function handleSocialLogin(
    provider: 'spotify' | 'twitter' | 'facebook'
  ) {
    try {
      const token = await socialLoginPopup<string>(
        getSocialProviderUrl(provider)
      );
      handleLogin(token);
    } catch (e) {
      message.error(`Something went wrong, try again!`);
    }
  }

  return (
    <ButtonsWrapper>
      <SpotifyButton
        disabled={disabledFromMutation}
        block={true}
        type="default"
        size="large"
        onClick={async () => await handleSocialLogin('spotify')}
      >
        Login With Spotify
      </SpotifyButton>
      <FacebookButton
        disabled={disabledFromMutation}
        block={true}
        size="large"
        onClick={async () => await handleSocialLogin('facebook')}
      >
        Login with Facebook
      </FacebookButton>
      <TwitterButton
        disabled={disabledFromMutation}
        size="large"
        block={true}
        onClick={async () => await handleSocialLogin('twitter')}
      >
        Login With Twitter
      </TwitterButton>
    </ButtonsWrapper>
  );
};

export default LoginSocial;
