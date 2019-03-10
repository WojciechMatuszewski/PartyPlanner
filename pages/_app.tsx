import React from 'react';
import App, { Container, NextAppContext } from 'next/app';
import 'ant-design-pro/dist/ant-design-pro.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import withApollo from '../apolloSetup/withApollo';
import AppLayout from '@components/Layout/AppLayout';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class MyApp extends App<{
  apolloClient: ApolloClient<NormalizedCacheObject>;
}> {
  public static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  public render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
