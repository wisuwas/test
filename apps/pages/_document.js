import React from 'react';
import Safe from 'react-safe';
import Iframe from 'react-iframe';
import Document, {
  Head,
  Main,
  NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import Pages from '../pages';
import {
  getFBPixel,
  getGoogleRMKT,
  getGoogleAnalysis
} from './_helpers';

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    const { renderPage, asPath } = ctx;
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, asPath, styleTags };
  }

  render() {
    const { css } = this.props.buildManifest;
    return (
      <html>
        <Head>
          {css.map(file => <link rel="stylesheet" href={`/_next/${file}`} key={file} />)}
          {this.props.styleTags}
          {getGoogleAnalysis()}
          <link rel="icon" href="/static/img/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/static/img/favicon.ico" type="image/x-icon" />
          {getGoogleRMKT(this.props.asPath)}
          {getFBPixel(this.props.asPath)}
        </Head>
        <body className="dtac-2017">
          <noscript>
            <Iframe
              url="https://www.googletagmanager.com/ns.html?id=GTM-TC8XN6"
              height="0"
              width="0"
              display="none"
              visibility="hidden"
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
