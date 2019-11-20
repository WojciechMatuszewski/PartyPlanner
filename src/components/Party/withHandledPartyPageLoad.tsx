import React from 'react';
import PartyAuthenticator, {
  PartyAuthResult,
  InjectedPartyFromAuth
} from '@auth/party-auth';
import PageException from '@components/UI/PageException';
import ErrorSection from '@components/UI/ErrorSection';
import { WithApolloAuthInjectedProps } from '@apolloSetup/withApolloAuth';
import { NextContextWithApollo } from '@pages/_app';
import redirect from '@apolloSetup/redirect';

export type WithHandledPartyPageLoadInjectedProps = {
  party: InjectedPartyFromAuth;
  user: WithApolloAuthInjectedProps['me'];
  canJoin: boolean;
};

export default function withHandledPartyPageLoad(
  ComponentToBeWrapped: React.ComponentType<
    WithHandledPartyPageLoadInjectedProps
  >
) {
  return class WithHandledPartyPageLoad extends React.Component<
    PartyAuthResult
  > {
    static async getInitialProps(context: NextContextWithApollo<any>) {
      const { pathname } = context;
      const authData = await PartyAuthenticator.AuthenticateParty(context);

      if (authData.canJoin && pathname != '/party-dashboard') {
        return redirect(
          context,
          `/party/${context.query.id}`,
          `party-dashboard?id=${context.query.id}`
        );
      }

      return authData;
    }

    render() {
      const { party, isMember, canJoin, error, user } = this.props;

      if (error || !user)
        return <ErrorSection description="Please refresh the page" />;

      if ((!canJoin && !isMember) || !party)
        return (
          <PageException
            desc="That party does not exists or you are not invited"
            redirectPath="/user/dashboard"
            backText="Back to dashboard"
          />
        );

      return (
        <ComponentToBeWrapped party={party} user={user} canJoin={canJoin} />
      );
    }
  };
}
