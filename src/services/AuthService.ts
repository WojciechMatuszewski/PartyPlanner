import cookie from 'cookie';
import { ApolloClient } from 'apollo-boost';
import redirect from '@apolloSetup/redirect';
import { isBrowser } from '@apolloSetup/initApollo';
import { USER_PRESENCE_CONFIG } from '@graphql/resolvers';

export const LOCAL_STORAGE_SPOTIFY_TOKEN = 'SPOTIFY_TOKEN';
export const LOCAL_STORAGE_SPOTIFY_REFRESH_TOKEN = 'SPOTIFY_REFRESH_TOKEN';
export const LOCAL_STORAGE_PROVIDER_NAME = 'SOCIAL_PROVIDER_NAME';

export function saveToken(token: string) {
  document.cookie = cookie.serialize('token', token, {
    path: '/'
  });
}

export function getToken(): string | null {
  return cookie.parse(document.cookie).token;
}

export async function handleLogout(client: ApolloClient<any>) {
  document.cookie = cookie.serialize('token', '', {
    maxAge: -1,
    path: '/'
  });

  await client.cache.reset();
  if (isBrowser()) {
    localStorage.removeItem(USER_PRESENCE_CONFIG.localStorageHeartbeatKeyName);
    localStorage.removeItem(LOCAL_STORAGE_SPOTIFY_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_PROVIDER_NAME);
    localStorage.removeItem(LOCAL_STORAGE_SPOTIFY_REFRESH_TOKEN);
  }

  redirect({} as any, '/auth-login', '/login');
}

export function handleLogin(token: string) {
  saveToken(token);
  redirect({} as any, '/user-dashboard', '/user/dashboard');
}
