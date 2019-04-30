const xtraInternetData = {
  dtacWifi: true,
  sideBar: {
    mainText: 'ขยายธุรกิจ SME ด้วยเน็ตเต็มสปีด',
    ribbon: {
      logo: '/static/img/logo/Xtra Internet.png',
      color: 'blue',
    },
  },
  packageTable: {
    columns: [
      'package',
      'fee',
      'dataSize',
      'registerLink'
    ],
    columnText: {
      package: 'แพ็กเกจ',
      fee: 'ค่าบริการรายเดือน',
      dataSize: 'อินเทอร์เน็ต (4G/3G)',
      registerLink: 'สมัครแพ็กเกจ'
    },
    rowGroups: [
      {
        name: '',
        rows: [
          {
            package: 'l',
            fee: 499,
            dataSize: '15 GB',
            registerLink: {
              link: '/customer/register',
              text: 'สมัคร'
            }
          },
          {
            package: 's',
            fee: 199,
            dataSize: '2 GB',
            registerLink: {
              link: '/customer/register',
              text: 'สมัคร'
            }
          },
        ]
      }
    ]
  }
};

export default xtraInternetData;
