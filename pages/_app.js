import App, {Container} from 'next/app';
import Head from 'next/head';
import React from 'react';

class Gateway extends App {
  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Head>
          <link href="/static/slick.css" rel="stylesheet" />
          <link href="/static/slick-theme.css" rel="stylesheet" />
          <link href="/static/rc-slider.css" rel="stylesheet" />
          <link href="/static/index.css" rel="stylesheet" />
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default Gateway;
