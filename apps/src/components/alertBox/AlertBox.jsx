import React from 'react';
import './AlertBox.scss';
import { generateClassName } from '../../helpers/generateClassName';

const AlertBox = (props) => (
  <div className={
    generateClassName(
      'AlertBox',
      {
        error: props.type === 'error',
        success: props.type === 'success',
        warning: props.type === 'warning'
      }
    )
  }>
    {props.children}
  </div>
);

export default AlertBox
