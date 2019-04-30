import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Next Modules
import Head from 'next/head';
import Router from 'next/router';

// NProgress
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleLeft,
  faAngleRight,
  faBars,
  faTimes,
  faSync,
  faSignOutAlt,
  faPhone,
  faAsterisk
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faAngleLeft,
  faAngleRight,
  faBars,
  faTimes,
  faSync,
  faSignOutAlt,
  faPhone,
  faAsterisk
);

// Global CSS
import '@/styles/scss/style.scss';

import Header from '../header/Header';
import SubHeader from '../subHeader/SubHeader';
import './Layout.scss';
import Footer from '../footer/Footer';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { closeMenu, openLogin, openMenu } from '../../actions/menu';
import { connect } from 'react-redux';
import { initialLoad } from '../../actions/initialLoad';
import { generateClassName } from '../../helpers/generateClassName';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.menuOpen) {
      // kick to the end of event stack
      setTimeout(() => this.props.closeMenu(), 300);
    }

    if (this.props.isRequiredLogin) {
      this.props.openMenu();
      this.props.openLogin();
    }

    if (!this.props.doneInitialLoad) {
      this.props.initialLoad();
    }
  }

  render() {
    return (
      <div className={
        generateClassName(
          'Layout',
          {
            menuOpen: this.props.menuOpen
          }
        )
      }>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>dtac SME | SME Services Website</title>
        </Head>
        <Header />
        <SubHeader />
        <div className="Layout__BurgerMenu">
          <BurgerMenu alwaysOpenLogin={this.props.alwaysOpenLogin} right={true} pageWrapId="Layout__Container" outerContainerId="Layout" />
        </div>
        <div className="Layout__Container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  alwaysOpenLogin: PropTypes.bool
};

const mapStateToProps = (state) => ({
  menuOpen: state.menu.menuOpen,
  doneInitialLoad: state.initialLoad.done,
  isRequiredLogin: state.user.isRequiredLogin
});

const mapDispatchToProps = dispatch => ({
  openMenu: () => dispatch(openMenu()),
  closeMenu: () => dispatch(closeMenu()),
  openLogin: () => dispatch(openLogin()),
  initialLoad: () => dispatch(initialLoad())
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
