import React from 'react';
import Layout from '../src/components/layout/Layout';
import { notNoServiceData } from '../src/data/notNoServiceData';
import BlogDtacSme from '../src/components/blogDtacSme/BlogDtacSme';

const DtacNotNoServicePage = () => (
  <Layout>
    <BlogDtacSme {...notNoServiceData} />
  </Layout>
);

export default DtacNotNoServicePage;
