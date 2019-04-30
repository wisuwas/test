import React from 'react';
import Layout from '../src/components/layout/Layout';
import ImageSliderContainer from '../src/components/imageSliderContainer/ImageSliderContainer';
import Pages from '../src/helpers/Pages';

const images = [
  {
    src: '/static/img/reward-banner.jpg',
    route: Pages.DtacNotNoServicePage
  },
  {
    src: '/static/img/reward-banner-2.jpg',
    route: Pages.DtacTurboPage
  }
];

const DtacNetworkPage = () => (
  <Layout>
    <ImageSliderContainer images={images}/>
  </Layout>
);

export default DtacNetworkPage;
