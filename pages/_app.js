import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { BreakpointsProvider } from 'react-with-breakpoints';

class Gateway extends App {
  render() {
    const { Component, pageProps } = this.props;
    const breakpoints = {
      small: 768,
      medium: 991,
      large: 1021,
      xlarge: Infinity
    };

    return (
      <BreakpointsProvider breakpoints={breakpoints}>
        <Container>
          <Head>
            <link href="/static/slick.css" rel="stylesheet" />
            <link href="/static/slick-theme.css" rel="stylesheet" />
            <link href="/static/rc-slider.css" rel="stylesheet" />
            <link href="/static/index.css" rel="stylesheet" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <link
              rel="shortcut icon"
              href="/static/favicon.ico"
              type="image/x-icon"
            />
            <title key="title">Gateway Church, York</title>
          </Head>
          <Component {...pageProps} />
        </Container>
      </BreakpointsProvider>
    );
  }
}

export default Gateway;
