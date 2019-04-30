import React from 'react';
import { AlignMiddleImage } from '../styledElements/index';
import './SubHeader.scss';
import withDropDown from '../../hoc/withDropDown/withDropDown';
import withLink from '../../hoc/withLink';
import menu from '../../data/menu';

const SubHeader = () => (
  <div className="SubHeader">
    <ul className="SubHeader__List">
      {
        menu.map(({ text, dropDown, link }, i) => (
            <SubheaderButtonWithDropdown
              wrapperType="li"
              wrapperClassName="SubHeader__Item"
              containerClassName="MenuDropDown__Container"
              itemClassName="MenuDropDown__Item"
              listItemClassName="MenuDropDown__ListItem"
              text={text}
              btnLink={link}
              dropDown={dropDown}
              key={`sh-item-${i}`}
              openByHover={true}
            />
          )
        )
      }
    </ul>
  </div>
);

const SubHeaderButton = ({ text, isDropDownOpen, btnLink }) => withLink(
  btnLink,
  <button className={`SubHeader__Button ${isDropDownOpen ? 'SubHeader__Button--active' : ''}`}>
    <div className="SubHeader__Button--skewFix">
      <AlignMiddleImage src="/static/img/dtac-icon.svg" className="SubHeader__BulletIcon"/>
      {text}
    </div>
  </button>,
  `link-btn-${1}`
);

const SubheaderButtonWithDropdown = withDropDown(SubHeaderButton);

export default SubHeader;
