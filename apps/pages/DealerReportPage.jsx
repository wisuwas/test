import React from 'react';
import Layout from '../src/components/layout/Layout';
import Pages from '../src/helpers/Pages';
import ReportPage from '../src/components/reportPage/ReportPage';

const DealerReportPage = () => (
  <Layout>
    <ReportPage
      tableDataTemplate={tableDataTemplate}
      title="รายงานผู้แทนจำหน่าย"
      getApiEndpointWithPageIndex={getApiEndpointWithPageIndex}
      page={Pages.CustomerReportPage}
    />
  </Layout>
);

const getApiEndpointWithPageIndex = (pageIndex) => `/api/dealer/page/${pageIndex}`;

const tableDataTemplate = (data) => ({
  columns: [
    'firstName',
    'lastName',
    'companyName',
    'phoneNumber',
    'address',
    'interestedOperateArea',
    'createdAt',
  ],
  columnText: {
    firstName: 'ชื่อ',
    lastName: 'นามสกุล',
    companyName: 'ชื่อบริษัท',
    phoneNumber: 'เบอร์มือถือ',
    address: 'ที่อยู่',
    interestedOperateArea: 'พื้นที่ที่สนใจทำการขาย (จังหวัด/อำเภอ)',
    createdAt: 'วันที่สมัคร',
  },
  rowGroups: [
    {
      name: '',
      rows: data,
    }
  ]
});

export default DealerReportPage
