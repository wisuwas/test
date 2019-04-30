const smeBuffetData = {
  dtacWifi: true,
  sideBar: {
    mainText: 'โทรไม่อั้นทุกเครือข่าย 24 ชม. +เน็ตความเร็วสูงสุด',
    ribbon: {
      logo: '/static/img/logo/SME Buffet.png',
      color: 'pink'
    },
  },
  packageTable: {
    columns: [
      'package',
      'fee',
      'dataSize',
      'extFreeCall',
      'freeSms',
      'freeMms',
      'registerLink'
    ],
    columnText: {
      package: 'แพ็กเกจ',
      fee: 'ค่าบริการรายเดือน',
      dataSize: 'อินเทอร์เน็ต (4G/3G)',
      extFreeCall: 'โทรฟรีทุกเครือข่าย',
      freeSms: 'ฟรี SMS',
      freeMms: 'ฟรี MMS',
      registerLink: 'สมัครแพ็กเกจ'
    },
    rowGroups: [
      {
        name: '',
        rows: [
          {
            package: 'l',
            fee: 599,
            dataSize: '16 GB',
            extFreeCall: 'บุฟเฟต์ 24 ชม.',
            freeSms: '20 ครั้ง',
            freeMms: '20 ครั้ง',
            registerLink: {
              link: '/customer/register',
              text: 'สมัคร'
            }
          },
          {
            package: 'm',
            fee: 499,
            dataSize: '6 GB',
            extFreeCall: 'บุฟเฟต์ 24 ชม.',
            freeSms: '20 ครั้ง',
            freeMms: '20 ครั้ง',
            registerLink: {
              link: '/customer/register',
              text: 'สมัคร'
            }
          }
        ]
      }
    ]
  }
};

export default smeBuffetData;
