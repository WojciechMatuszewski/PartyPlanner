import { PARTY_FRAGMENT } from '@graphql/fragments';
import { WithApolloAuthInjectedProps } from './../../apolloSetup/withApolloAuth';
import {
  Party_AuthenticateQuery,
  Party_AuthenticateVariables
} from './../../generated/graphql';

import ApolloAuthenticator from '@auth/apollo-auth';
import { NextContextWithApollo } from '@pages/_app';
import gql from 'graphql-tag';
import { NextFunctionComponent } from 'next';

export const PARTY_AUTHENTICATION_QUERY = gql`
  query Party_Authenticate($partyId: ID!) {
    authenticateParty(partyId: $partyId) {
      canJoin
      isMember
      party {
        ...PARTY_FRAGMENT
      }
    }
  }
  ${PARTY_FRAGMENT}
`;

export type InjectedPartyFromAuth = NonNullable<
  Party_AuthenticateQuery['authenticateParty']['party']
>;

export type PartyPage = NextFunctionComponent<
  PartyAuthResult,
  PartyAuthResult,
  NextContextWithApollo<{ id?: string }>
>;

export type PartyAuthResult = {
  canJoin: boolean;
  partyId: string;
  userId: string;
  isMember: boolean;
  error: boolean;
  party: InjectedPartyFromAuth;
  user: WithApolloAuthInjectedProps['me'] | undefined;
};

function notAuthenticated(
  user: PartyAuthResult['user'] = undefined,
  error: boolean = false
) {
  return {
    canJoin: false,
    partyId: '',
    userId: '',
    isMember: false,
    error: error,
    party: undefined as any,
    user: user
  };
}

async function AuthenticateParty<
  RouterQuery extends Record<string, string | undefined>
>(context: NextContextWithApollo<RouterQuery>): Promise<PartyAuthResult> {
  const {
    query: { id: partyId }
  } = context;

  if (!partyId) return notAuthenticated(undefined, true);

  const userData = await ApolloAuthenticator.authenticateRoute({
    userHasToBe: 'authenticated',
    ctx: context
  });

  if (!userData) return notAuthenticated(undefined, true);

  try {
    const {
      data: {
        authenticateParty: { canJoin, isMember, party }
      }
    } = await context.apolloClient.query<
      Party_AuthenticateQuery,
      Party_AuthenticateVariables
    >({
      query: PARTY_AUTHENTICATION_QUERY,
      variables: { partyId }
    });

    if ((!canJoin && !isMember) || !party) return notAuthenticated(userData.me);

    return {
      canJoin,
      isMember,
      partyId,
      userId: userData.me.id,
      error: false,
      party: party as InjectedPartyFromAuth,
      user: userData.me
    };
  } catch (e) {
    return notAuthenticated(undefined, true);
  }
}

const PartyAuthenticator = {
  AuthenticateParty
};

export default PartyAuthenticator;
