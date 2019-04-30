import React from 'react';
import './CardHeadBar.scss';
import PropTypes from 'prop-types';
import Ribbon from '../ribbon/Ribbon';
import { generateClassName } from '../../helpers/generateClassName';

const CardHeadBar = (props) => (
  <div className="CardHeadBar">
    <div className="CardHeadBar__Container">
      {
        props.ribbon &&
          <div className="CardHeadBar__Ribbon">
            <Ribbon {...props.ribbon}/>
          </div>
      }
      <div className="Ads">
        <div className={
          generateClassName(
            'Ads__Container',
            {
              ribbon: !!props.ribbon
            }
          )
        }>
          {
            props.innerImage &&
              <img className="Ads__InnerImage" src={props.innerImage} />
          }
          {
            props.subAdsText &&
            <div className="Ads__Content Ads__Content--small">
              {props.subAdsText}
            </div>
          }
          {
            props.haveSeparator &&
            <hr className="Ads__Separator"/>
          }
          {
            props.mainText &&
            <div className="Ads__Content">
              {props.mainText}
            </div>
          }
        </div>
      </div>
    </div>
  </div>
);

CardHeadBar.propTypes = {
  subAdsText: PropTypes.string,
  haveSeparator: PropTypes.bool,
  mainText: PropTypes.string,
  ribbon: PropTypes.shape(Ribbon.propTypes)
};

export default CardHeadBar
