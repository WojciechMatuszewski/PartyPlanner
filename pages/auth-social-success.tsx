import React from 'react';
import { NextFunctionComponent } from 'next';
import { NextContextWithApollo } from './_app';
import ApolloAuthenticator from '@apolloSetup/apolloAuthenticator';
import { SocialMediaType } from '@generated/graphql';
import redirect from '@apolloSetup/redirect';
import css from '@emotion/css';
import { Spin } from 'antd';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { Exception } from 'ant-design-pro';
import useLocalStorage from '@hooks/useLocalStorage';
import {
  LOCAL_STORAGE_SPOTIFY_TOKEN,
  LOCAL_STORAGE_SPOTIFY_REFRESH_TOKEN,
  LOCAL_STORAGE_PROVIDER_NAME
} from '@services/AuthService';

const SocialAuthWrapperStyles = css`
  width: 100%;
  height: 100vh;
`;

type RouterQueryProps = {
  provider: SocialMediaType;
  jwt: string;
  providerToken: string;
  providerRefreshToken: string;
};

const checkAgainstObj: RouterQueryProps = {
  provider: SocialMediaType.Spotify,
  jwt: '',
  providerToken: '',
  providerRefreshToken: ''
};

interface InjectedProps {
  shouldBeHere: boolean;
  socialLoginProps: RouterQueryProps;
}

const AuthSocialSuccessPage: NextFunctionComponent<
  InjectedProps,
  InjectedProps,
  NextContextWithApollo<RouterQueryProps>
> = props => {
  const { saveToStorage } = useLocalStorage();

  React.useEffect(() => {
    if (!props.shouldBeHere) return;
    const {
      provider,
      providerRefreshToken,
      providerToken,
      jwt
    } = props.socialLoginProps;

    saveToStorage(provider, LOCAL_STORAGE_PROVIDER_NAME);
    if (provider == SocialMediaType.Spotify) {
      saveToStorage(providerToken, LOCAL_STORAGE_SPOTIFY_TOKEN);
      saveToStorage(providerRefreshToken, LOCAL_STORAGE_SPOTIFY_REFRESH_TOKEN);
    }

    window.opener.postMessage(jwt, process.env.NEXT_STATIC_FRONTEND_URL);
  }, []);

  if (!props.shouldBeHere)
    return (
      <Exception
        type="403"
        img="../static/security.svg"
        css={[SocialAuthWrapperStyles]}
        backText="Back to home"
        desc="Not authorized"
      />
    );

  return (
    <div css={[SocialAuthWrapperStyles, FlexBoxFullCenteredStyles]}>
      <Spin />
    </div>
  );
};

AuthSocialSuccessPage.getInitialProps = async function(
  context
): Promise<InjectedProps> {
  await ApolloAuthenticator.authenticateRoute({
    userHasToBe: 'notAuthenticated',
    ctx: context
  });

  const { query } = context;

  if (isMissingKeys(query, checkAgainstObj)) {
    redirect(context, 'auth-login', '/login');
    return {
      shouldBeHere: false,
      socialLoginProps: query
    };
  }
  return {
    shouldBeHere: true,
    socialLoginProps: query
  };
};

export default AuthSocialSuccessPage;

function isMissingKeys(
  objToCheck: RouterQueryProps,
  objectToCheckAgainst: RouterQueryProps
) {
  let hasMissingKeys = false;
  Object.keys(objectToCheckAgainst).forEach(key => {
    if (!(`${key}` in objToCheck)) {
      hasMissingKeys = true;
    }
  });
  return hasMissingKeys;
}
