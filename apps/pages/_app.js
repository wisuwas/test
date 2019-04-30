import React from 'react';
import App, { Container } from 'next/app';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initStore from '@/store/';
import { Provider } from 'react-redux';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape(),
  store: PropTypes.shape(),
};

MyApp.defaultProps = {
  pageProps: undefined,
  store: undefined,
};

export default withRedux(initStore)(MyApp);
