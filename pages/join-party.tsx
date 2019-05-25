import React from 'react';
import { NextFunctionComponent } from 'next';
import {
  MeQueryMe,
  PartiesQueryComponent,
  JoinPartyMutationComponent
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

export type InvitationLinkProps = { token: string; id: string };

type RouteQueryProps = Partial<InvitationLinkProps>;

interface InjectedProps {
  authenticatedUserData: MeQueryMe;
  invitationToken: string;
  partyId: string;
}

const JoinParty: NextFunctionComponent<
  InjectedProps & WithRouterProps,
  {},
  NextContextWithApollo<RouteQueryProps>
> = props => {
  return (
    <PartiesQueryComponent
      ssr={false}
      variables={{
        where: {
          inviteSecret: props.invitationToken,
          members_none: { id: props.authenticatedUserData.id },
          id: props.partyId
        }
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

        if (data.parties.length == 0)
          return <JoinPartyCannotJoin onGoBackClick={handleGoBackClick} />;

        const {
          parties: [party]
        } = data;

        return (
          <JoinPartyMutationComponent
            variables={{
              where: {
                partyId: props.partyId,
                userId: props.authenticatedUserData.id
              }
            }}
          >
            {(joinParty, { loading, error }) => (
              <JoinPartyCanJoin
                error={error}
                loading={loading}
                party={party}
                onJoinClick={async () => void (await joinParty())}
                onGoBackClick={handleGoBackClick}
              />
            )}
          </JoinPartyMutationComponent>
        );
      }}
    </PartiesQueryComponent>
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
  if (!data) return {};

  if (!context.query.token && !context.query.id) {
    redirect(context, '/dashboard');
  }

  return {
    authenticatedUserData: data.me,
    invitationToken: context.query.token,
    partyId: context.query.id
  };
};

export default withRouter(JoinParty);
