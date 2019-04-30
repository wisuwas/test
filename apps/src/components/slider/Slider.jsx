import React from 'react';
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Slider.scss';
import PropTypes from 'prop-types';
import { generateClassName } from '../../helpers/generateClassName';

const angleRight = props => (
  <button
    className={
      generateClassName(
        'Slider__Button',
        {
          disabled: !props.wrapAround && props.currentSlide === props.slideCount - 1,
        },
      )}
    onClick={props.nextSlide}
  >
    <FontAwesomeIcon icon="angle-right" />
  </button>);

const angleLeft = props => (
  <button
    className={
      generateClassName(
        'Slider__Button',
        {
          disabled: props.wrapAround && props.currentSlide === 0,
        },
      )}
    onClick={props.previousSlide}
  >
    <FontAwesomeIcon icon="angle-left" />
  </button>);

const sliderStatus = (props) => {
  const circles = [];
  for (let i = 0; i < props.slideCount; i++) {
    circles.push(
      <button
        className={
          generateClassName(
            'SliderStatus__Circle',
            {
              active: i === props.currentSlide,
            },
          )}
        onClick={() => props.goToSlide(i)}
        key={`sliderStatus-${i}`}
      />,
    );
  }
  return (
    <div className="SliderStatus">
      {circles}
    </div>
  );
};

const Slider = props => (
  <Carousel
    renderCenterRightControls={angleRight}
    renderCenterLeftControls={angleLeft}
    renderBottomCenterControls={sliderStatus}
    ref={props.slideRef}
    {...props}
  >
    {props.children}
  </Carousel>
);

Slider.propTypes = {
  autoplay: PropTypes.bool,
  autoplayInterval: PropTypes.number,
  heightMode: PropTypes.string,
  width: PropTypes.string,
  slideWidth: PropTypes.number,
  wrapAround: PropTypes.bool,
  slideRef: PropTypes.func,
};

export default Slider;
