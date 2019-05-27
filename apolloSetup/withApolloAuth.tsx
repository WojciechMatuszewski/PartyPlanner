import React from 'react';
import ApolloAuthenticator from './apolloAuthenticator';
import { NextContextWithApollo } from '@pages/_app';
import { MeQueryQuery } from '@generated/graphql';
import { Subtract } from 'utility-types';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';

export interface WithApolloAuthInjectedProps {
  me: NonNullable<DeepWithoutMaybe<MeQueryQuery['me']>>;
}

export const withApolloAuth = ({
  userHasToBe
}: {
  userHasToBe: 'authenticated' | 'notAuthenticated';
}) => <WrappedComponentProps extends WithApolloAuthInjectedProps>(
  _WrappedComponent: React.ComponentType<WrappedComponentProps>
) => {
  const WrappedComponent = _WrappedComponent as React.ComponentType<
    WithApolloAuthInjectedProps
  >;

  type WithAuthProps = Subtract<
    WrappedComponentProps,
    WithApolloAuthInjectedProps
  >;
  return class WithAuth extends React.Component<WithAuthProps> {
    static displayName = `withAuth${WrappedComponent.name}`;

    static async getInitialProps(ctx: NextContextWithApollo) {
      return await ApolloAuthenticator.authenticateRoute({
        ctx,
        userHasToBe
      });
    }

    public render() {
      return <WrappedComponent {...this.props as any} />;
    }
  };
};
