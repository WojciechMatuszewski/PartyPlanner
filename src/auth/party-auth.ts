import ApolloAuthenticator from '@auth/apollo-auth';
import { NextContextWithApollo } from '@pages/_app';
import {
  HasPartiesQueryQuery,
  HasPartiesQueryVariables
} from '@generated/graphql';
import { HAS_PARTIES_QUERY } from '@graphql/queries';

type PartyAuthenticationResult = {
  isInParty: boolean;
  partyId: string;
};

const notAuthenticated: PartyAuthenticationResult = {
  isInParty: false,
  partyId: ''
};

async function isUserInParty<
  RouterQuery extends Record<string, string | undefined>
>(
  context: NextContextWithApollo<RouterQuery>
): Promise<PartyAuthenticationResult> {
  const userData = await ApolloAuthenticator.authenticateRoute({
    userHasToBe: 'authenticated',
    ctx: context
  });

  if (!userData || !context.query.id) return notAuthenticated;

  const {
    data: { hasParties }
  } = await context.apolloClient.query<
    HasPartiesQueryQuery,
    HasPartiesQueryVariables
  >({
    query: HAS_PARTIES_QUERY,
    variables: {
      where: {
        id: context.query.id
      }
    }
  });

  return {
    isInParty: hasParties,
    partyId: context.query.id
  };
}

const PartyAuthenticator = {
  isUserInParty
};

export default PartyAuthenticator;
