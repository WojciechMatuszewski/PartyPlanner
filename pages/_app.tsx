import React from 'react';
import App, { Container, NextAppContext, AppProps } from 'next/app';
import 'ant-design-pro/dist/ant-design-pro.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import AppLayout from '@components/Layout';
import Router, { DefaultQuery } from 'next/router';
import NProgress from 'nprogress';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { NextContext } from 'next';
import withApollo from '@apolloSetup/withApollo';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import FirebaseService from '@services/FirebaseService';
import registerServiceWorker from '@services/ServiceWorkerService';
import MobileAppBanner from '@components/MobileAppBanner';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const PAGES_WITHOUT_HEADER = [
  '/auth-social-success',
  '/auth-social-error',
  '/auth-social-reauth-success',
  '/join-party'
];

export const NOT_AUTHENTICATED_ROUTES = [
  '/',
  '/auth-login',
  '/auth-register',
  '/auth-social-success',
  '/auth-social-error',
  '/auth-forgot-password',
  '/auth-reset-password'
];

const PAGES_WITH_SIDER = ['/party'];

function isOnAuthenticatedRoute(pathname: string) {
  return !NOT_AUTHENTICATED_ROUTES.includes(pathname);
}

export const FirebaseContext = React.createContext<any>(undefined);

export interface NextContextWithApollo<
  Query extends DefaultQuery = DefaultQuery
> extends NextContext<Query> {
  apolloClient: ApolloClient<any>;
  isVirtualCall?: boolean;
}

class MyApp extends App<{
  apolloClient: ApolloClient<NormalizedCacheObject>;
  withHeader: boolean;
}> {
  public static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};
    let withHeader = true;
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (PAGES_WITHOUT_HEADER.includes(ctx.pathname)) withHeader = false;
    return { pageProps, withHeader };
  }

  swRegistration: ServiceWorkerRegistration | null = null;

  async componentDidMount() {
    const { router } = this.props;

    const isAuthenticatedRoute = isOnAuthenticatedRoute(router.pathname);
    if (isAuthenticatedRoute) {
      this.swRegistration = await registerServiceWorker();
      FirebaseService.initWithSw(this.swRegistration);
    }

    this.swRegistration = await registerServiceWorker();
  }

  async componentDidUpdate({ router }: AppProps) {
    if (!isOnAuthenticatedRoute(router.pathname)) return;

    if (!this.swRegistration) {
      this.swRegistration = await registerServiceWorker();
    }

    if (!FirebaseService.get()) {
      FirebaseService.initWithSw(this.swRegistration);
    }
  }

  public render() {
    const {
      Component,
      pageProps,
      apolloClient,
      withHeader,
      router
    } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ApolloHooksProvider client={apolloClient}>
            <MobileAppBanner />
            <AppLayout
              withHeader={withHeader}
              hasSider={router && PAGES_WITH_SIDER.includes(router.pathname)}
            >
              <Component {...pageProps} />
            </AppLayout>
          </ApolloHooksProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
