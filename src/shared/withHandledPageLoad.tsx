import React from 'react';
import PartyAuthenticator, {
  PartyAuthResult,
  InjectedPartyFromAuth
} from '@auth/party-auth';
import PageException from '@components/UI/PageException';
import ErrorSection from '@components/UI/ErrorSection';
import { WithApolloAuthInjectedProps } from '@apolloSetup/withApolloAuth';
import { NextContextWithApollo } from '@pages/_app';
import JoinPublicParty from '@components/Party/JoinParty/JoinPublicParty';

export type WithHandledPageLoadInjectedProps = {
  party: InjectedPartyFromAuth;
  user: WithApolloAuthInjectedProps['me'];
};

export default function withHandledPartyPageLoad(
  ComponentToBeWrapped: React.ComponentType<WithHandledPageLoadInjectedProps>
) {
  return class WithHandledPartyPageLoad extends React.Component<
    PartyAuthResult
  > {
    static async getInitialProps(context: NextContextWithApollo<any>) {
      return await PartyAuthenticator.AuthenticateParty(context);
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

      if (canJoin) {
        return <JoinPublicParty />;
      }

      return <ComponentToBeWrapped party={party} user={user} />;
    }
  };
}
