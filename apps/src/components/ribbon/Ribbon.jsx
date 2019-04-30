import PropTypes from 'prop-types';
import React from 'react';
import './Ribbon.scss';

const Ribbon = (props) => (
  <div className={`Ribbon ${props.color ? `Ribbon--${props.color}` : ''}`}>
    <div className="Ribbon__Container">
      {
        props.logo && <img className="Ribbon__Logo" src={props.logo}/>
      }
      {
        props.text && <span className="Ribbon__Title">{props.text}</span>
      }
    </div>
  </div>
);

Ribbon.propTypes = {
  logo: PropTypes.string,
  color: PropTypes.string
};

export default Ribbon;
