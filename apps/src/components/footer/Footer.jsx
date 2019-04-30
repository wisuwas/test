import React from 'react';
import { AlignMiddleImage } from '../styledElements';

import './Footer.scss';

const Footer = () => (
  <div className="Footer">
    <div className="Footer__Container">
      <div className="Footer__Item">สอบถามข้อมูล ติดต่อ dtac SME 088-188-1678</div>
      <div className="Footer__Item">
        <span>dtac SME Social : </span>
        <a href="//www.facebook.com/dtac" target="_blank">
          <AlignMiddleImage src="/static/img/icon-facebook.svg" className="Footer__SocialLogo"/>
        </a>
        <a href="//twitter.com/dtac" target="_blank">
          <AlignMiddleImage src="/static/img/icon-twitter.svg" className="Footer__SocialLogo"/>
        </a>
        <a href="//www.instagram.com/dtac/" target="_blank">
          <AlignMiddleImage src="/static/img/icon-ig.svg" className="Footer__SocialLogo"/>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
