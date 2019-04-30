import React from 'react';
import './CardSideBar.scss';
import PropTypes from 'prop-types';
import Banner from '../banner/Banner';
import { generateClassName } from '../../helpers/generateClassName';

const CardSideBar = (props) => (
  <div className={
    generateClassName(
      'CardSideBar',
      {
        overFlow: props.overFlow
      })
  }>
    <div className="CardSideBar__Container">
      <Banner bannerImage={props.bannerImage} ribbon={props.ribbon}/>
      <div className="Ads">
        <div className={
          generateClassName(
            'Ads__Container',
            {
              ribbon: props.ribbon,
              noImage: !props.bannerImage && props.ribbon,
              narrow: props.narrowMain
            })
        }>
          {
            props.contentOrder.map((item) => {
              switch (item) {
                case sideBarContent.innerImage:
                  return props.innerImage &&
                    <img className="Ads__InnerImage" src={props.innerImage} key={item}/>;
                case 'subAdsText':
                  return props.subAdsText &&
                    <div className="Ads__Content Ads__Content--small" key={item}>
                      {props.subAdsText}
                    </div>;
                case 'separator':
                  return props.haveSeparator &&
                    <hr className="Ads__Separator" key={item}/>;
                case 'mainText':
                  return props.mainText &&
                    <div className={
                      generateClassName(
                        'Ads__Content',
                        {
                          small: props.smallMain,
                          narrow: props.narrowMain
                        }
                      )
                    } key={item}>
                      {props.mainText}
                    </div>;
                case 'bullets':
                    return props.bullets &&
                      <div className='Ads__Bullets' key={'bullets'}>
                        <ul>
                        {props.bullets.map((item,idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                        </ul>
                      </div>
                default:
                  return null;
              }
            })
          }
        </div>
      </div>
    </div>
  </div>
);

export const sideBarContent = {
  innerImage: 'innerImage',
  subAdsText: 'subAdsText',
  separator: 'separator',
  mainText: 'mainText',
  bullets: 'bullets'
};

CardSideBar.defaultProps = {
  contentOrder: [
    sideBarContent.innerImage,
    sideBarContent.subAdsText,
    sideBarContent.separator,
    sideBarContent.mainText,
    sideBarContent.bullets
  ]
};

CardSideBar.propTypes = {
  ...Banner.propTypes,
  subAdsText: PropTypes.string,
  haveSeparator: PropTypes.bool,
  mainText: PropTypes.string,
  innerImage: PropTypes.string,
  overFlow: PropTypes.bool,
  smallMain: PropTypes.bool,
  shortHead: PropTypes.bool,
  narrowMain: PropTypes.bool,
  contentOrder: PropTypes.arrayOf(PropTypes.string)
};

export default CardSideBar
