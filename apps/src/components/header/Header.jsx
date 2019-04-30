import React from 'react';
import { AlignMiddleImage } from '../styledElements';
import './Header.scss';
import BurgerMenuButton from '../burgerMenu/BurgerMenuButton';
import { toggleLogin } from '../../actions/menu';
import { connect } from 'react-redux';
import withLink from '../../hoc/withLink';
import Pages from '../../helpers/Pages';
import secondaryMenu from '../../data/secondaryMenu'
import ProfileButton from '../profileButton/ProfileButton';

const Header = (props) => (
  <div className="Header">
    <div className="Header__Container">
      <div className="Header__LeftItem">
        {
          withLink(Pages.index, <AlignMiddleImage src="/static/img/logo.svg" className="Header__Logo"/>)
        }
      </div>
      <div className="Header__RightItem">
        {
          secondaryMenu.map(({ text, link }, i) => (
            withLink(
              link,
              <button className="Header__Item" key={`sec-menu-${i}`}>
                {text}
              </button>,
              `link-sec-menu-${i}`
            )
          ))
        }
        <BurgerMenuButton className="Header__MenuButton"/>
        {
          false &&
            <React.Fragment>
              <ProfileButton onClick={props.toggleLogin}/>
              <span className="Header__Separator"/>
              <button className="Header__LanguageFlag">
                <AlignMiddleImage src="/static/img/flag.svg"/>
              </button>
            </React.Fragment>
        }
      </div>
    </div>
  </div>
);

const mapDispatchToProps = {
  toggleLogin
};

export default connect(null, mapDispatchToProps)(Header);
