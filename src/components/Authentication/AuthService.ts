import cookie from 'cookie';
import { ApolloClient } from 'apollo-boost';
import redirect from '@apolloSetup/redirect';
import { isBrowser } from '@apolloSetup/initApollo';
import { USER_PRESENCE_CONFIG } from '@graphql/resolvers';

export function saveToken(token: string) {
  document.cookie = cookie.serialize('token', token);
}

export function getToken(): string | null {
  return cookie.parse(document.cookie).token;
}

export async function handleLogout(client: ApolloClient<any>) {
  document.cookie = cookie.serialize('token', '', {
    maxAge: -1,
    // NICE MEME, ALMOST 1 HR OF SEARCHING
    path: '/'
  });
  document.cookie = cookie.serialize('token', '', {
    maxAge: -1,
    // NICE MEME, ALMOST 1 HR OF SEARCHING
    path: '/user'
  });

  await client.cache.reset();
  cookie.parse(document.cookie);
  if (isBrowser()) {
    localStorage.removeItem(USER_PRESENCE_CONFIG.localStorageHeartbeatKeyName);
  }

  redirect({} as any, '/auth-login', '/login');
}

export function handleLogin(token: string) {
  saveToken(token);
  redirect({} as any, '/user/dashboard');
}
