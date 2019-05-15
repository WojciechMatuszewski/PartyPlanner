import React from 'react';
import { NextContext } from 'next';
import { ApolloClient } from 'apollo-boost';
import ApolloAuthenticator from './apolloAuthenticator';
import { NextContextWithApollo } from '@pages/_app';

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

    public static async getInitialProps(ctx: NextContextWithApollo) {
      return await ApolloAuthenticator.authenticateRoute({ ctx, userHasToBe });
    }

    public render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
