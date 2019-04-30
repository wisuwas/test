import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'react-burger-menu/lib/menus/slide'
import { closeMenu, toggleMenu, openLogin, changeMenu, closeLogin } from '../../actions/menu';
import { connect } from 'react-redux';
import './BurgerMenu.scss';
import { AlignMiddleImage } from '../styledElements';
import LoginForm from '../loginForm/LoginForm';
import withLink from '../../hoc/withLink';
import menu from '../../data/menu';
import secondaryMenu from '../../data/secondaryMenu';
import ProfileButton from '../profileButton/ProfileButton';
import adminMenu from '../../data/adminMenu';
import { generateClassName } from '../../helpers/generateClassName';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from '../../actions/user';
import withDropDown from '../../hoc/withDropDown/withDropDown';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDesktop: false,
      menuOpenState: false
    }
  }

  componentWillUnmount() {
    this.mql && this.mql.removeListener(this.mediaQueryChanged);
  }

  componentDidMount() {
    // we have to initial here because of SSR
    this.mql = window.matchMedia(`(min-width: 1024px)`);

    this.mql.addListener(this.mediaQueryChanged);
    this.setState({
      isDesktop: this.mql.matches
    });
  }

  mediaQueryChanged = () => {
    if (this.mql.matches && this.props.menuOpen && !this.props.loginOpen) {
      this.props.closeMenu();
    }

    this.setState({
      isDesktop: this.mql.matches
    });
  };

  onStateMenuChanged = (state) => {
    if (state.isOpen !== this.props.menuOpen) {
      this.props.changeMenu(state.isOpen);
    }
  };

  onSignOut = () => {
    this.props.signOut(this.props.csrfToken);
  };

  render() {
    const isLogin = !!this.props.user.displayName;
    const loginOpen = !!this.props.loginOpen || !!this.props.alwaysOpenLogin;
    return (
      <Menu
        isOpen={!!this.props.menuOpen || !!this.props.alwaysOpenLogin}
        pageWrapId={this.props.pageWrapId}
        outerContainerId={this.props.outerContainerId}
        customBurgerIcon={false}
        customCrossIcon={false}
        width={this.state.isDesktop ? "320px" : "100%"}
        onStateChange={this.onStateMenuChanged}
        className={this.props.className}
        right={this.props.right}
      >
        <div className="BurgerMenu">
          {
            this.props.alwaysOpenLogin &&
              <React.Fragment>
                {
                  !isLogin && loginOpen ?
                    (
                      <LoginForm />
                    ) : (
                      <ProfileButton onClick={isLogin ? null : loginOpen} mobile={true}/>
                    )
                }
                <hr className="Separator"/>
              </React.Fragment>
          }
          {
            menu.map((props, i) => (
              <ButtonWithDropdown
                {...props}
                index={i}
                key={i}
                wrapperClassName="MenuDropDown"
                containerClassName="MenuDropDown__Container"
                itemClassName="MenuDropDown__Item"
                listItemClassName="MenuDropDown__ListItem"
                openByClick={true}
              />
            ))
          }
          <hr className="Separator"/>
          {
            createMenuList(secondaryMenu, false)
          }
          <button className="MenuItem">
            language
            <AlignMiddleImage className="MenuItem__LanguageFlag" src="/static/img/flag.svg"/>
          </button>
          {
            isLogin &&
            (
              <React.Fragment>
                <hr className="Separator"/>
                {
                  createMenuList(adminMenu, isLogin)
                }
                <hr className="Separator Separator--admin"/>
                <button className="MenuItem MenuItem--admin" onClick={this.onSignOut}>
                  <FontAwesomeIcon
                    className="MenuItem__SignOutIcon"
                    icon={this.props.user.isLoading ? 'sync' : 'sign-out-alt'}
                    spin={this.props.user.isLoading}
                  />
                  Sign out
                </button>
              </React.Fragment>
            )
          }
        </div>
      </Menu>
    );
  }
}

const ButtonWithDropdown = withDropDown((props) => (
  withLink(
    !props.dropDown ? props.link : null,
    <button
      className={generateClassName('MenuItem', { active: props.isDropDownOpen })}
      key={`bur-menu-${props.index}`}
    >
      <AlignMiddleImage src="/static/img/dtac-icon.svg" className="MenuItem__BulletIcon"/>
      {props.text}
    </button>,
    `link-bur-menu-${props.index}`
  ))
);

const createMenuList = (data, isAdmin) => (
  data.map(({ text, link }, i) =>
    withLink(
      link,
      <button className={
        generateClassName(
          'MenuItem',
          {
            admin: isAdmin
          }
        )
      } key={`bur-sec-menu-${i}`}>
        {text}
      </button>,
      `link-bur-sec-menu-${i}`
    )
  ));

BurgerMenu.propTypes = {
  pageWrapId: PropTypes.string.isRequired,
  outerContainerId: PropTypes.string.isRequired,
  className: PropTypes.string
};

const mapStateToProps = (state) => ({
  menuOpen: state.menu.menuOpen,
  loginOpen: state.menu.loginOpen,
  user: state.user,
  csrfToken: state.csrfToken
});

const mapDispatchToProps = (dispatch) => ({
  closeMenu: () => dispatch(closeMenu()),
  toggleMenu: () => dispatch(toggleMenu()),
  openLogin: () => dispatch(openLogin()),
  changeMenu: () => dispatch(changeMenu()),
  closeLogin: () => dispatch(closeLogin()),
  signOut: (csrfToken) => dispatch(signOut(csrfToken))
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);
