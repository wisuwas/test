import React from 'react';
import './SubmitButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RoundedButton from '../button/RoundedButton';
import PropTypes from 'prop-types';
import { generateClassName } from '../../helpers/generateClassName';

const SubmitButton = (props) => (
  <RoundedButton className="SubmitButton" onClick={props.onClick} type={props.type} form={props.formName}>
    {props.text}
    <FontAwesomeIcon
      className={ generateClassName('SubmitButton__Icon', { sync: props.icon === 'sync' }) }
      size="sm"
      icon={props.icon}
      spin={props.isIconSpinning}
    />
  </RoundedButton>
);

SubmitButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  formName: PropTypes.string,
  icon: PropTypes.string,
  isIconSpinning: PropTypes.bool
};

SubmitButton.defaultProps = {
  icon: 'angle-right',
  isIconSpinning: false
};

export default SubmitButton
