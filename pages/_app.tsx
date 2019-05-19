import React from 'react';
import App, { Container, NextAppContext } from 'next/app';
import 'ant-design-pro/dist/ant-design-pro.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import withApollo from '../apolloSetup/withApollo';
import AppLayout from '@components/Layout/AppLayout';
import Router, { DefaultQuery } from 'next/router';
import NProgress from 'nprogress';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { NextContext } from 'next';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const PAGES_WITHOUT_HEADER = ['/social-auth'];
const PAGES_WITH_SIDER = ['/party'];

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
