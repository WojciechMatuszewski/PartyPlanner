import React from 'react';
import { NextContext } from 'next';
import { ApolloClient } from 'apollo-boost';
import redirect from './redirect';
import { MeQueryQuery, MeQueryDocument } from '@generated/graphql';
import { parseCookies } from './withApollo';

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
      function checkCookieValidity() {
        const { token } = parseCookies(ctx.req);
        if (!token && userHasToBe === 'authenticated') {
          ctx.pathname !== '/login' && redirect(ctx, '/login');
          return {};
        }
        if (!token && userHasToBe === 'notAuthenticated') {
          return {};
        }
      }

      if (ctx.isVirtualCall) {
        return ctx;
      }
      checkCookieValidity();
      try {
        const response = await ctx.apolloClient.query<MeQueryQuery>({
          query: MeQueryDocument
        });
        if (userHasToBe === 'notAuthenticated') {
          redirect(ctx, '/dashboard');
        }
        return {
          me: response.data.me
        };
      } catch (e) {
        ctx.pathname !== '/login' && redirect(ctx, '/login');
        return { ala: 'ma kota' };
      }
    }

    public render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
