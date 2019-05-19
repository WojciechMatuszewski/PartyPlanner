import { parseCookies } from './withApollo';
import redirect from './redirect';
import { MeQueryQuery, MeQueryDocument, MeQueryMe } from '@generated/graphql';
import { handleLogout } from '@components/Authentication/AuthService';
import { NextContextWithApollo } from '@pages/_app';

interface ApolloAuthenticatorProps {
  userHasToBe: 'authenticated' | 'notAuthenticated';
  ctx: NextContextWithApollo;
}

const ApolloAuthenticator = (function() {
  return { authenticateRoute: authenticate };

  async function authenticate({
    userHasToBe,
    ctx
  }: ApolloAuthenticatorProps): Promise<{ me: MeQueryMe } | null> {
    const hasRequestToken = doesRequestTokenExists(ctx);

    if (!hasRequestToken) {
      if (userHasToBe == 'authenticated')
        return redirectWithCheck('/login', {}, ctx);
      else return null;
    }

    const userData = await getUserDataFromServer(ctx);

    if (!userData) {
      if (userHasToBe == 'authenticated')
        return handleMustBeAuthenticatedNoServerData(ctx);
      else return null;
    }

    if (userData) {
      if (userHasToBe == 'authenticated') return userData;
      else return redirectWithCheck('/dashboard', userData, ctx);
    }
    return null;
  }

  async function getUserDataFromServer(ctx: NextContextWithApollo) {
    try {
      const { data } = await ctx.apolloClient.query<MeQueryQuery>({
        query: MeQueryDocument
      });
      if (isServerResponseValid(data)) {
        return {
          me: data.me as MeQueryMe
        };
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  function doesRequestTokenExists(ctx: NextContextWithApollo) {
    const { token } = parseCookies(ctx.req);
    return token != null && token.trim().length > 0;
  }

  function redirectWithCheck(route: string, dataToReturn: any, ctx: any) {
    ctx.pathname != route && redirect(ctx as any, route);
    return dataToReturn;
  }

  function handleMustBeAuthenticatedNoServerData(ctx: NextContextWithApollo) {
    handleLogout(ctx.apolloClient);
    return null;
  }

  function isServerResponseValid(meData: MeQueryQuery) {
    return meData.me != null && Object.keys(meData.me).length > 0;
  }
})();

export default ApolloAuthenticator;
