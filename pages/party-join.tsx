import React from 'react';
import { NextFunctionComponent } from 'next';
import {
  JoinPartyMutationComponent,
  JoinPartyFindComponent,
  PaginatePartiesQueryDocument,
  PaginateUsersQueryDocument
} from '@generated/graphql';
import { NextContextWithApollo } from './_app';
import ApolloAuthenticator from '@apolloSetup/apolloAuthenticator';
import redirect from '@apolloSetup/redirect';
import { Typography, Spin, Button } from 'antd';
import { hasGraphqlData, handleRefetch } from '@shared/graphqlUtils';
import { withRouter, WithRouterProps } from 'next/router';
import GraphqlInlineError from '@components/GraphqlInlineError';
import JoinPartyCannotJoin from '@components/Party/JoinParty/JoinPartyCannotJoin';
import JoinPartyCanJoin from '@components/Party/JoinParty/JoinPartyCanJoin';
import {
  JoinPartyInnerWrapper,
  JoinPartySection
} from '@components/Party/JoinParty/styles';
import gql from 'graphql-tag';

export const JOIN_PARTY_FIND_QUERY = gql`
  query JoinPartyFind($inviteSecret: String!, $userId: ID!) {
    parties(
      where: { inviteSecret: $inviteSecret, members_none: { id: $userId } }
    ) {
      id
      members(first: 3) {
        id
        firstName
        lastName
        avatar
      }
      title
    }
    membersCount: paginateUsers(
      where: { parties_some: { inviteSecret: $inviteSecret } }
    ) {
      aggregate {
        count
      }
    }
  }
`;

export type InvitationLinkProps = { token: string };
type RouteQueryProps = Partial<InvitationLinkProps>;

interface InjectedProps {
  userId: string;
  invitationToken: string;
}

const JoinParty: NextFunctionComponent<
  InjectedProps & WithRouterProps,
  {},
  NextContextWithApollo<RouteQueryProps>
> = props => {
  return (
    <JoinPartyFindComponent
      ssr={false}
      variables={{
        inviteSecret: props.invitationToken,
        userId: props.userId
      }}
    >
      {({ loading, data, error, refetch }) => {
        if (error)
          return (
            <JoinPartySection>
              <JoinPartyInnerWrapper>
                <GraphqlInlineError>
                  <Button onClick={async () => handleRefetch(refetch)}>
                    Try again
                  </Button>
                </GraphqlInlineError>
              </JoinPartyInnerWrapper>
            </JoinPartySection>
          );
        if (loading || !hasGraphqlData(data, ['parties']) || !props.router)
          return (
            <JoinPartySection>
              <Typography.Title level={2}>
                Validating your request
              </Typography.Title>
              <Spin />
            </JoinPartySection>
          );

        const {
          parties: [party]
        } = data;

        if (!party)
          return <JoinPartyCannotJoin onGoBackClick={handleGoBackClick} />;

        return (
          <JoinPartyMutationComponent
            variables={{
              partyId: party.id
            }}
          >
            {(joinParty, { loading, error }) => (
              <JoinPartyCanJoin
                error={error}
                loading={loading}
                party={party}
                membersCount={data.membersCount.aggregate.count}
                onJoinClick={async () => {
                  try {
                    await joinParty({
                      refetchQueries: [
                        {
                          query: PaginatePartiesQueryDocument
                        },
                        {
                          query: PaginateUsersQueryDocument
                        }
                      ]
                    });
                    props.router &&
                      props.router.push(
                        `/party-dashboard?id=${party.id}`,
                        `/party/${party.id}`
                      );
                  } catch {
                    // handled by error passed to the component
                  }
                }}
                onGoBackClick={handleGoBackClick}
              />
            )}
          </JoinPartyMutationComponent>
        );
      }}
    </JoinPartyFindComponent>
  );

  function handleGoBackClick() {
    props.router && props.router.back();
  }
};

JoinParty.getInitialProps = async context => {
  const data = await ApolloAuthenticator.authenticateRoute({
    userHasToBe: 'authenticated',
    ctx: context
  });

  if (!data || !hasGraphqlData(data, ['me'])) return {};

  if (!context.query.token) {
    redirect(context, '/dashboard');
  }

  return {
    userId: data.me.id,
    invitationToken: context.query.token
  };
};

export default withRouter(JoinParty);
