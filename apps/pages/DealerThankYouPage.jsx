import React from 'react';
import Layout from '../src/components/layout/Layout';
import DealerRegister from '../src/components/dealerRegister/DealerRegister';

const DealerRegisterPage = () => (
  <Layout>
    <DealerRegister  forceStartStep={2}/>
  </Layout>
);

export default DealerRegisterPage;
