import React from 'react';
import Layout from '../src/components/layout/Layout';
import ReportPage from '../src/components/reportPage/ReportPage';
import Pages from '../src/helpers/Pages';

const CustomerReportPage = () => (
  <Layout>
    <ReportPage
      tableDataTemplate={tableDataTemplate}
      title="รายงานลูกค้าที่สนใจ"
      getApiEndpointWithPageIndex={getApiEndpointWithPageIndex}
      page={Pages.CustomerReportPage}
    />
  </Layout>
);

const getApiEndpointWithPageIndex = (pageIndex) => `/api/customer/page/${pageIndex}`;

const tableDataTemplate = (data) => ({
  columns: [
    'firstName',
    'lastName',
    'companyName',
    'phoneNumber',
    'numberOfRequest',
    'createdAt',
  ],
  columnText: {
    firstName: 'ชื่อ',
    lastName: 'นามสกุล',
    companyName: 'ชื่อบริษัท',
    phoneNumber: 'เบอร์มือถือ',
    numberOfRequest: 'จำนวนเบอร์ที่คาดว่าจะใช้ในธุรกิจ',
    createdAt: 'วันที่สมัคร',
  },
  rowGroups: [
    {
      name: '',
      rows: data,
    }
  ]
});

export default CustomerReportPage
