import React from 'react';
import './LoginForm.scss';
import { connect } from 'react-redux';
import { closeLogin, updateLoginInfo } from '../../actions/menu';
import { login } from '../../actions/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AlertBox from '../alertBox/AlertBox';
import { generateClassName } from '../../helpers/generateClassName';
import { withRouter } from 'next/router'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.username,
      password: props.password
    }
  }

  componentWillUnmount() {
    this.props.updateLoginInfo(this.state.username, this.state.password);
  }

  onClickCancel = (e) => {
    e.preventDefault();

    this.props.closeLogin();
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    this.props.updateLoginInfo(username, password);

    const isAuthenticated = await this.props.login(username, password, this.props.csrfToken);

    if (isAuthenticated && this.props.isRequiredLogin) {
      this.props.router.push(this.props.returnUrl);
    }
  };

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    if (this.props.user.isLogin) {
      return null;
    }

    return (
      <form className="LoginForm" onSubmit={this.onSubmit} id="login-form">
        <div className="LoginForm__Row">
          <h6 className="Title">เข้าสู่ระบบ สำหรับผู้บริหารจัดการระบบ</h6>
        </div>
        {
          this.props.loginError &&
            <div className="LoginForm__Row">
              <AlertBox type="error">{this.props.loginError}</AlertBox>
            </div>
        }
        {
          this.props.isRequiredLogin &&
            <div className="LoginForm__Row">
              <AlertBox type="warning">กรุณาเข้าสู่ระบบ</AlertBox>
            </div>
        }
        <div className="LoginForm__Row">
          <input
            className={`LoginForm__Cell ${
              generateClassName(
                'LoginForm__Input',
                {
                  hasError: !!this.props.loginError
                }
              )
              }`}
            name="username"
            placeholder="ชื่อผู้ใช้งาน"
            value={this.state.username}
            onChange={this.onChangeUsername}
          />
        </div>
        <div className="LoginForm__Row">
          <input
            className={`LoginForm__Cell ${
              generateClassName(
                'LoginForm__Input',
                {
                  hasError: !!this.props.loginError
                }
              )
              }`}
            name="password"
            placeholder="รหัสผ่าน"
            onChange={this.onChangePassword}
            value={this.state.password}
            type="password"
          />
        </div>
        <div className="LoginForm__Row">
          <div className="LoginForm__ButtonContainer">
            <button
              className="LoginForm__Cell LoginForm__SubmitButton"
              type="submit"
              form="login-form"
            >
              เข้าสู่ระบบ
            </button>
            {
              this.props.user.isLoading && <FontAwesomeIcon className="LoginForm__LoadingIcon" icon="sync" spin/>
            }
            <button
              className="LoginForm__Cell LoginForm__CancelButton"
              onClick={this.onClickCancel}
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.menu.username,
  password: state.menu.password,
  loginError: state.menu.loginError,
  isRequiredLogin: state.user.isRequiredLogin,
  returnUrl: state.user.returnUrl,
  csrfToken: state.csrfToken,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  closeLogin: () => dispatch(closeLogin()),
  updateLoginInfo: (username, password) => dispatch(updateLoginInfo(username, password)),
  login: (username, password, csrfToken) => dispatch(login(username, password, csrfToken))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));
