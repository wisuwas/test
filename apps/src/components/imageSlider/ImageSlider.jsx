import React from 'react';
import Slider from '../slider/Slider';
import PropTypes from 'prop-types';
import './ImageSlider.scss';
import withLink from '../../hoc/withLink';

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
      isPause: false
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.isPause) return;

      this.setState(prevState => {
        const imagesNumber = this.props.images.length;
        const nextSlide = prevState.currentSlide === imagesNumber - 1 ?
          0 : prevState.currentSlide + 1;

        return {
          currentSlide: nextSlide
        };
      });
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleOnLoadImage = () => {
    this.slider.setDimensions()
  };

  handleOnMouseEnter = () => {
    this.setState({
      isPause: true
    });
  };

  handleOnMouseLeave = () => {
    this.setState({
      isPause: false
    });
  };

  render() {
    return (
      <Slider
        initialSlideHeight={400}
        slideRef={c => this.slider = c}
        heightMode="current"
        slideIndex={this.state.currentSlide}
      >
        {this.props.images.map((image, index) => (
          withLink(
            image.route,
            <img
              className="ImageSlider__Image"
              src={image.src}
              key={`img-${index}`}
              onLoad={this.handleOnLoadImage}
              onMouseEnter={this.handleOnMouseEnter}
              onMouseLeave={this.handleOnMouseLeave}
            />,
            `img-${index}`)
        ))}
      </Slider>
    );
  }
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      route: PropTypes.string
    }).isRequired
  ).isRequired,
};

export default ImageSlider;

