import React from 'react';
import { NextFunctionComponent } from 'next';
import useSpotifyWebSdk from '@hooks/useSpotifyWebSdk';
import { Button } from 'antd';

function withSpotifyAuth<Props, InjectedProps, Context>(
  WrappedComponent: NextFunctionComponent<Props, InjectedProps, Context>
) {
  const HOC: NextFunctionComponent<Props, InjectedProps, Context> = props => {
    const { shouldAskForNewToken } = useSpotifyWebSdk();
    return shouldAskForNewToken ? (
      <Button>Login</Button>
    ) : (
      <WrappedComponent {...props} />
    );
  };

  HOC.getInitialProps = async function(context) {
    if (WrappedComponent.getInitialProps)
      return await WrappedComponent.getInitialProps(context);
    return {} as InjectedProps;
  };

  return HOC;
}

export default withSpotifyAuth;
