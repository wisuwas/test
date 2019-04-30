import React from 'react';
import Layout from '../src/components/layout/Layout';
import ImageSliderContainer from '../src/components/imageSliderContainer/ImageSliderContainer';
import Pages from '../src/helpers/Pages';

const images = [
  {
    src: '/static/img/DTAC_NoWorry449_Banner-2734x936.jpg',
    route: `${Pages.PackagePage}#main`,
  },
  {
    src: '/static/img/20181130_dtac_SME_Banner_MNP_2880x936.jpg',
    route: Pages.CustomerRegisterPage,
  },
  {
    src: '/static/img/SME-dMessage-Banner.jpg',
    route: `${Pages.DMessagePackagePage}`,
  },
  {
    src: '/static/img/reward-banner.jpg',
    route: Pages.DtacNotNoServicePage,
  },
  {
    src: '/static/img/reward-banner-2.jpg',
    route: Pages.DtacTurboPage,
  },
  {
    src: '/static/img/2880936.png',
    route: `${Pages.IoTPage}`,
  },
];

const Index = (props) => (
  <Layout alwaysOpenLogin={props.alwaysOpenLogin}>
    <ImageSliderContainer images={images}/>
  </Layout>
);

export default Index;