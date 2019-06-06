import {
  LOCAL_STORAGE_SPOTIFY_TOKEN,
  LOCAL_STORAGE_SPOTIFY_REFRESH_TOKEN
} from '@services/AuthService';
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
    const token = retrieveFromStorage(LOCAL_STORAGE_SPOTIFY_TOKEN);
    const refreshToken = retrieveFromStorage(
      LOCAL_STORAGE_SPOTIFY_REFRESH_TOKEN
    );
    if (!token || !refreshToken) return setShouldAskForANewToken(true);
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

  function initWithNewTokens(token: string, refreshToken: string) {
    init({ token, refreshToken });
    setShouldAskForANewToken(false);
  }

  return {
    shouldAskForNewToken,
    initWithNewTokens
  };
}

export default useSpotifyWebSdk;
