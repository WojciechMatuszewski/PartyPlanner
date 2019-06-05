import React from 'react';
import useLocalStorage from './useLocalStorage';
import { isBrowser } from '@apolloSetup/initApollo';
import { init } from 'spotify-web-sdk';
import { Subject } from 'rxjs';

export const SpotifyAuthenticationError$ = new Subject<void>();

function useSpotifyWebSdk() {
  const [shouldAskForNewToken, setShouldAskForANewToken] = React.useState<
    boolean
  >(false);

  const { retrieveFromStorage } = useLocalStorage();

  React.useEffect(() => {
    if (!isBrowser()) return;
    const token = retrieveFromStorage('spotify-token');
    const refreshToken = retrieveFromStorage('spotify-refresh-token');
    if (!token) return setShouldAskForANewToken(true);
    init({
      token,
      refreshToken
    });
  }, []);

  React.useEffect(() => {
    if (!isBrowser()) return;
    const subscription = SpotifyAuthenticationError$.subscribe(() =>
      setShouldAskForANewToken(true)
    );
    return () => subscription.unsubscribe();
  }, []);

  function saveNewToken(token: string, refreshToken?: string) {
    init({ token, refreshToken });
  }

  return {
    shouldAskForNewToken,
    saveNewToken
  };
}

export default useSpotifyWebSdk;
