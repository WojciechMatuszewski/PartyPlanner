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
import { isObjectMissingKeys } from '@shared/functionUtils';
import UserMissingLastName from '@components/User/UserMissingLastName/UserMissingLastName';

const SocialAuthWrapperStyles = css`
  width: 100%;
  height: 100vh;
`;

type RouterQueryProps = {
  provider: SocialMediaType;
  jwt: string;
  providerToken: string;
  providerRefreshToken: string;
  missingLastName: string;
};

const checkAgainstObj: RouterQueryProps = {
  provider: SocialMediaType.Spotify,
  jwt: '',
  providerToken: '',
  providerRefreshToken: '',
  missingLastName: ''
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

  const called = React.useRef(false);

  const {
    provider,
    providerRefreshToken,
    providerToken,
    jwt,
    missingLastName
  } = props.socialLoginProps;

  function handleSuccess() {
    if (called.current) return;
    saveToStorage(provider, LOCAL_STORAGE_PROVIDER_NAME);
    if (provider == SocialMediaType.Spotify) {
      saveToStorage(providerToken, LOCAL_STORAGE_SPOTIFY_TOKEN);
      saveToStorage(providerRefreshToken, LOCAL_STORAGE_SPOTIFY_REFRESH_TOKEN);
    }

    window.opener.postMessage(
      { meta: 'party_planner', payload: jwt },
      process.env.NEXT_STATIC_FRONTEND_URL
    );
    called.current = true;
  }

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

  if (missingLastName == 'true') {
    return (
      <div css={[SocialAuthWrapperStyles]}>
        <UserMissingLastName jtw={jwt} onDone={handleSuccess} />
      </div>
    );
  }

  return <AuthSocialSpinner callOnSafeTick={handleSuccess} />;
};

function AuthSocialSpinner({
  callOnSafeTick
}: {
  callOnSafeTick: VoidFunction;
}) {
  // for some reason window can be undefined if we call inside 'render phase'
  React.useEffect(() => {
    callOnSafeTick();
  }, []);
  return (
    <div css={[SocialAuthWrapperStyles, FlexBoxFullCenteredStyles]}>
      <Spin />
    </div>
  );
}

AuthSocialSuccessPage.getInitialProps = async function(
  context
): Promise<InjectedProps> {
  await ApolloAuthenticator.authenticateRoute({
    userHasToBe: 'notAuthenticated',
    ctx: context
  });

  const { query } = context;

  if (isObjectMissingKeys(query, checkAgainstObj)) {
    redirect(context, 'auth-login', '/login');
    return {
      shouldBeHere: false,
      socialLoginProps: query
    };
  }

  const isMissingLastNameMalformed = !['true', 'false'].includes(
    query.missingLastName
  );
  if (isMissingLastNameMalformed) {
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
