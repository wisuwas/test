import React from 'react';
import './RoundedButton.scss';

const RoundedButton = (props) => (
  <button {...props} className={`RoundedButton ${props.className || ''}`}>
    {props.children}
  </button>
);

export const RoundedLinkButton = (props) => (
  <a {...props} className={`RoundedButton RoundedButton--link ${props.className || ''}`}>
    {props.children}
  </a>
);

export default RoundedButton
