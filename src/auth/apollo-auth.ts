import { MeQueryQuery, MeQueryDocument } from '@generated/graphql';
import { NextContextWithApollo } from '@pages/_app';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { handleLogout } from '@services/AuthService';
import { WithApolloAuthInjectedProps } from '@apolloSetup/withApolloAuth';
import { parseCookies } from '@apolloSetup/withApollo';
import redirect from '@apolloSetup/redirect';

interface ApolloAuthenticatorProps {
  userHasToBe: 'authenticated' | 'notAuthenticated';
  ctx: NextContextWithApollo;
}

async function authenticate({
  userHasToBe,
  ctx
}: ApolloAuthenticatorProps): Promise<WithApolloAuthInjectedProps | null> {
  const hasRequestToken = doesRequestTokenExists(ctx);

  if (!hasRequestToken) {
    if (userHasToBe == 'authenticated')
      return redirectWithCheck({}, ctx, '/auth-login', '/login');
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
    else
      return redirectWithCheck(
        userData,
        ctx,
        '/user-dashboard',
        '/user/dashboard'
      );
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
        me: data.me
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

function redirectWithCheck(
  dataToReturn: any,
  ctx: any,
  route: string,
  as?: string
) {
  ctx.pathname != route && redirect(ctx as any, route, as);
  return dataToReturn;
}

function handleMustBeAuthenticatedNoServerData(ctx: NextContextWithApollo) {
  handleLogout(ctx.apolloClient);
  return null;
}

function isServerResponseValid(
  meData: MeQueryQuery
): meData is DeepWithoutMaybe<MeQueryQuery> {
  return meData.me != null && Object.keys(meData.me).length > 0;
}

const ApolloAuthenticator = {
  authenticateRoute: authenticate
};

export default ApolloAuthenticator;
