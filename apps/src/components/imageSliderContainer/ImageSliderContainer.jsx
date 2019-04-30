import React from 'react';
import './ImageSliderContainer.scss';
import ImageSlider from '../imageSlider/ImageSlider';

const ImageSliderContainer = (props) => (
  <div className="ImageSliderContainer">
    <ImageSlider images={props.images} />
  </div>
);

export default ImageSliderContainer
