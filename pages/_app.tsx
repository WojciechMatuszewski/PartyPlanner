import React from 'react';
import App, { Container, NextAppContext } from 'next/app';
import 'ant-design-pro/dist/ant-design-pro.css';
import AppLayout from '../src/components/Layout/AppLayout';

class MyApp extends App {
  public static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Container>
    );
  }
}

export default MyApp;
