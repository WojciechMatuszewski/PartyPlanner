import cookie from 'cookie';

export function saveToken(token: string) {
  document.cookie = cookie.serialize('token', token);
}

export function getToken(): string | null {
  return cookie.parse(document.cookie).token;
}
