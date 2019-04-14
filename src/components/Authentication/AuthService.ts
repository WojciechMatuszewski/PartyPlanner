import cookie from 'cookie';
import { ApolloClient } from 'apollo-boost';
import redirect from '@apolloSetup/redirect';
import { isBrowser } from '@apolloSetup/initApollo';

export function saveToken(token: string) {
  document.cookie = cookie.serialize('token', token);
}

export function getToken(): string | null {
  return cookie.parse(document.cookie).token;
}

export async function handleLogout(client: ApolloClient<any>, req: any = null) {
  if (isBrowser()) {
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1
    });
  } else if (!isBrowser() && req) {
    req.headers.cookie = null;
  }
  await client.cache.reset();

  if (isBrowser()) {
    redirect({} as any, '/login');
  }
}

export function handleLogin(token: string) {
  saveToken(token);
  redirect({} as any, '/dashboard');
}
