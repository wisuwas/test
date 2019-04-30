import Ribbon from '../ribbon/Ribbon';
import PropTypes from 'prop-types';
import React from 'react';
import './Banner.scss';
import styled from 'styled-components';

const ImageContainer = styled.div`
  height: ${props => props.height}px;
`;

const FloatingImage = styled.img`
  top: ${props => props.offsetTop}px;
`;

const renderBannerImage = (bannerImage) => {
  if (!bannerImage || !bannerImage.src) return null;

  if (bannerImage.floating) {
    const { height, offsetTop } = bannerImage.floating;
    return (
      <ImageContainer height={height}>
        <FloatingImage
          className={
            "Banner__FloatImage"
          }
          offsetTop={offsetTop}
          src={bannerImage.src}
        />
      </ImageContainer>
    );
  } else {
    return <img className="Banner__Image" src={bannerImage.src} />;
  }
};


const Banner = (props) => (
  <div className="Banner">
    {
      renderBannerImage(props.bannerImage)
    }
    {
      props.ribbon &&
        <div
          className={
            "Banner__FloatRibbon" +
            `${props.bannerImage ?
              ' Banner__FloatRibbon--lifted' : ' Banner__FloatRibbon--noHeadImage'}`
          }
        >
          <Ribbon {...props.ribbon} />
        </div>
    }
  </div>
);

Banner.propTypes = {
  bannerImage: PropTypes.shape({
    src: PropTypes.string,
    floating: PropTypes.shape({
      height: PropTypes.number,
      offsetTop: PropTypes.number
    })
  }),
  ribbon: PropTypes.shape(Ribbon.propTypes)
};

export default Banner;
