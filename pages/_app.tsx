import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import withApollo from '../apolloSetup/withApollo';

class CustomApp extends App<{
  apolloClient: ApolloClient<NormalizedCacheObject>;
}> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(CustomApp);
