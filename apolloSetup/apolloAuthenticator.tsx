import { NextContext } from 'next';
import { ApolloClient } from 'apollo-boost';
import { parseCookies } from './withApollo';
import redirect from './redirect';
import { MeQueryQuery, MeQueryDocument } from '@generated/graphql';
import { handleLogout } from '@components/Authentication/AuthService';

interface ApolloAuthenticatorProps {
  userHasToBe: 'authenticated' | 'notAuthenticated';
  ctx: NextContext & {
    apolloClient: ApolloClient<any>;
    isVirtualCall?: boolean;
  };
}
export function makeApolloAuthenticator({
  userHasToBe,
  ctx
}: ApolloAuthenticatorProps) {
  return {
    getUserDataFromServer,
    doesRequestTokenExists,
    redirectWithCheck,
    handleMustBeAuthenticatedNoServerData,
    authenticate
  };

  async function authenticate() {
    const hasRequestToken = doesRequestTokenExists();

    if (!hasRequestToken) {
      if (userHasToBe == 'authenticated')
        return redirectWithCheck('/login', {}, {});
      else return {};
    }

    const userData = await getUserDataFromServer();

    if (!userData) {
      if (userHasToBe == 'authenticated')
        return handleMustBeAuthenticatedNoServerData();
      else return {};
    }

    if (userData) {
      if (userHasToBe == 'authenticated') return userData;
      else return redirectWithCheck('/dashboard', userData, ctx);
    }
  }

  async function getUserDataFromServer() {
    try {
      const { data } = await ctx.apolloClient.query<MeQueryQuery>({
        query: MeQueryDocument
      });
      if (isServerResponseValid(data)) {
        return {
          me: data.me
        };
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  function doesRequestTokenExists() {
    const { token } = parseCookies(ctx.req);
    return token != null && token.trim().length > 0;
  }

  function redirectWithCheck(route: string, dataToReturn: any, ctx: any) {
    ctx.pathname != route && redirect(ctx as any, route);
    return dataToReturn;
  }

  function handleMustBeAuthenticatedNoServerData() {
    handleLogout(ctx.apolloClient);
    return {};
  }

  function isServerResponseValid(meData: MeQueryQuery) {
    return meData.me != null && Object.keys(meData.me).length > 0;
  }
}
