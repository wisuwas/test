import React from 'react';
import Layout from '../src/components/layout/Layout';
import BlogDtacSme from '../src/components/blogDtacSme/BlogDtacSme';
import { whyDtacSmeData } from '../src/data/whyDtacSmeData';

const WhyDtacSmePage = () => (
  <Layout>
    <BlogDtacSme {...whyDtacSmeData} />
  </Layout>
);

export default WhyDtacSmePage;
