import React from 'react';
import Layout from '../src/components/layout/Layout';
import BlogDtacSme from '../src/components/blogDtacSme/BlogDtacSme';
import { signUpStepData } from '../src/data/signUpStepData';

const SignUpStepPage = () => (
  <Layout>
    <BlogDtacSme {...signUpStepData} />
  </Layout>
);

export default SignUpStepPage;
