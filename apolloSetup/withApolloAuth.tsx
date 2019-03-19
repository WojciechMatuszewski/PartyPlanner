import React from 'react';
import { NextContext } from 'next';
import { ApolloClient } from 'apollo-boost';
import redirect from './redirect';
import { MeQueryQuery, MeQueryDocument } from '@generated/graphql';
import { parseCookies } from './withApollo';
import { handleLogout } from '@components/Authentication/AuthService';

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
          return true;
        }
        if (!token && userHasToBe === 'notAuthenticated') {
          return true;
        }
      }

      if (ctx.isVirtualCall) {
        return ctx;
      }

      const shouldReturnEmpty = checkCookieValidity();
      if (shouldReturnEmpty) return {};

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
        await handleLogout(ctx.apolloClient);
        return {};
      }
    }

    public render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
