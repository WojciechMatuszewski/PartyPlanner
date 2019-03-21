import { SingletonRouter } from 'next/router';
import cookie from 'cookie';
import { ApolloClient } from 'apollo-boost';
import redirect from '@apolloSetup/redirect';

export function saveToken(token: string) {
  document.cookie = cookie.serialize('token', token);
}

export function getToken(): string | null {
  return cookie.parse(document.cookie).token;
}

export async function handleLogout(client: ApolloClient<any>) {
  document.cookie = cookie.serialize('token', '', {
    maxAge: -1
  });
  await client.cache.reset();
  redirect({} as any, '/login');
}

export function handleLogin(token: string, router: SingletonRouter<any>) {
  saveToken(token);
  router && router.push('/dashboard');
}
