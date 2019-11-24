import React from 'react';
import { NextFunctionComponent } from 'next';
import { SocialMediaType } from '@generated/graphql';
import { NextContextWithApollo } from './_app';
import ApolloAuthenticator from '@apolloSetup/apolloAuthenticator';
import useLocalStorage from '@hooks/useLocalStorage';
import {
  LOCAL_STORAGE_SPOTIFY_REFRESH_TOKEN,
  LOCAL_STORAGE_SPOTIFY_TOKEN
} from '@services/AuthService';
import { Spin } from 'antd';
import { Exception } from 'ant-design-pro';
import { isObjectMissingKeys } from '@shared/functionUtils';
import redirect from '@apolloSetup/redirect';
import css from '@emotion/css';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
const SocialAuthWrapperStyles = css`
  width: 100%;
  height: 100vh;
`;
type RouterQueryProps = {
  provider: SocialMediaType;
  providerToken: string;
  providerRefreshToken: string;
};

interface InjectedProps {
  shouldBeHere: boolean;
  reAuthProps: RouterQueryProps;
}

const checkAgainstObj: RouterQueryProps = {
  provider: SocialMediaType.Spotify,
  providerToken: '',
  providerRefreshToken: ''
};

const AuthSocialReAuthSuccessPage: NextFunctionComponent<
  InjectedProps,
  InjectedProps,
  NextContextWithApollo<RouterQueryProps>
> = props => {
  const { saveToStorage } = useLocalStorage();

  React.useEffect(() => {
    if (!props.shouldBeHere) return;
    const {
      reAuthProps: { provider, providerRefreshToken, providerToken }
    } = props;
    // edit here for different providers
    if (provider == SocialMediaType.Spotify) {
      saveToStorage(providerRefreshToken, LOCAL_STORAGE_SPOTIFY_REFRESH_TOKEN);
      saveToStorage(providerToken, LOCAL_STORAGE_SPOTIFY_TOKEN);
    }
    window.opener.postMessage(
      {
        meta: 'party_planner',
        payload: { providerToken, providerRefreshToken }
      },
      process.env.NEXT_PUBLIC_FRONTEND_URL
    );
  }, []);

  if (!props.shouldBeHere) {
    return (
      <Exception
        type="403"
        img="../static/security.svg"
        // css={[SocialAuthWrapperStyles]}
        backText="Back to home"
        desc="Not authorized"
      />
    );
  }
  return (
    <div css={[SocialAuthWrapperStyles, FlexBoxFullCenteredStyles]}>
      <Spin />
    </div>
  );
};

AuthSocialReAuthSuccessPage.getInitialProps = async function(
  context
): Promise<InjectedProps> {
  const userData = await ApolloAuthenticator.authenticateRoute({
    userHasToBe: 'authenticated',
    ctx: context
  });
  if (!userData) {
    return {
      shouldBeHere: false,
      reAuthProps: context.query
    };
  }

  if (isObjectMissingKeys(context.query, checkAgainstObj)) {
    redirect(context, '/user-dashboard', 'user/dashboard');
    return {
      shouldBeHere: false,
      reAuthProps: context.query
    };
  }

  return {
    shouldBeHere: true,
    reAuthProps: context.query
  };
};

export default AuthSocialReAuthSuccessPage;
