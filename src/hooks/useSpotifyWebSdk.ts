import {
  LOCAL_STORAGE_SPOTIFY_TOKEN,
  LOCAL_STORAGE_SPOTIFY_REFRESH_TOKEN,
  getAuthToken
} from '@services/AuthService';
import React from 'react';
import useLocalStorage from './useLocalStorage';
import { isBrowser } from '@apolloSetup/initApollo';
import { init } from 'spotify-web-sdk';
import { Subject } from 'rxjs';
import axios from 'axios';

const NEW_ACCESS_TOKEN_ENDPOINT = `${
  process.env.NEXT_STATIC_ENDPOINT_URL
}/auth/spotify/new-token`;

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
      refreshToken,
      refreshTokenFunction: getNewAccessToken
    });
  }, []);

  React.useEffect(() => {
    if (!isBrowser()) return;
    const subscription = SpotifyAuthenticationError$.subscribe(() =>
      setShouldAskForANewToken(true)
    );
    return () => subscription.unsubscribe();
  }, []);

  return {
    shouldAskForNewToken,
    initWithNewTokens
  };

  // ---------------------------- //

  function initWithNewTokens(token: string, refreshToken: string) {
    init({ token, refreshToken });
    setShouldAskForANewToken(false);
  }

  async function getNewAccessToken(currentRefreshToken?: string) {
    if (!currentRefreshToken) {
      return setShouldAskForANewToken(true);
    }
    const {
      data: { access_token }
    } = await axios.post(
      NEW_ACCESS_TOKEN_ENDPOINT,
      { refreshToken: currentRefreshToken },
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`
        },
        withCredentials: true
      }
    );
    return access_token;
  }
}

export default useSpotifyWebSdk;
