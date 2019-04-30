import React from 'react';
import Layout from '../src/components/layout/Layout';
import CustomerRegister from '../src/components/customerRegister/CustomerRegister';

const CustomerRegisterPage = () => (
  <Layout>
    <CustomerRegister forceStartStep={2}/>
  </Layout>
);

export default CustomerRegisterPage;
