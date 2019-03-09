export function saveToken(token: string) {
  document.cookie = `token=${token}`;
}

export function getToken(): string | null {
  return document.cookie;
}
