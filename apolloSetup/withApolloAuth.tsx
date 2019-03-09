import React from 'react';
import { NextContext } from 'next';
import { ApolloClient } from 'apollo-boost';
import redirect from './redirect';
import { MeQueryQuery, MeQueryDocument } from '@generated/graphql';

export const withApolloAuth = <WrappedComponentProps extends object>(
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
      if (ctx.isVirtualCall) {
        return ctx;
      }
      try {
        const response = await ctx.apolloClient.query<MeQueryQuery>({
          query: MeQueryDocument
        });
        return {
          me: response.data.me
        };
      } catch (e) {
        redirect(ctx, '/');
        // message.error('You are not authenticated!');
        return {};
      }
    }

    public render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
