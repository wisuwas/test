import React from 'react';
import Index from './index';
import { requestRequireLogin } from '../src/actions/user';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { openMenu, closeMenu } from '../src/actions/menu';

class LoginPage extends React.Component {
  componentDidMount() {
    if (this.props.router.query.returnUrl) {
      this.props.requestRequireLogin(this.props.router.query.returnUrl);
    }
  }

  render() {
    return (
      <Index alwaysOpenLogin={true} />
    );
  }
}

const mapStateToProps = (state) => ({
  isRequiredLogin: state.user.isRequiredLogin,
  doneInitialLoad: state.initialLoad.done,
  username: state.user.username
});

const mapDispatchToProps = dispatch => ({
  requestRequireLogin: (returnUrl) => dispatch(requestRequireLogin(returnUrl)),
  openMenu: () => dispatch(openMenu()),
  closeMenu: () => dispatch(closeMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));
