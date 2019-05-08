import React from 'react';
import { NextContext } from 'next';
import { ApolloClient } from 'apollo-boost';
import { makeApolloAuthenticator } from './apolloAuthenticator';

export const withApolloAuth = ({
  userHasToBe
}: {
  userHasToBe: 'authenticated' | 'notAuthenticated';
}) => <WrappedComponentProps extends object>(
  WrappedComponent: React.ComponentType<WrappedComponentProps>
) => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return class WithAuth extends React.Component<WrappedComponentProps> {
    public static displayName = `withAuth${displayName}`;

    public static async getInitialProps(
      ctx: NextContext & {
        apolloClient: ApolloClient<any>;
        isVirtualCall?: boolean;
      }
    ) {
      const authenticator = makeApolloAuthenticator({ userHasToBe, ctx });
      const dataToReturn = await authenticator.authenticate();
      return dataToReturn;
    }

    public render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
