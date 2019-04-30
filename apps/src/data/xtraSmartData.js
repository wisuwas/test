import { Sites } from '../helpers/Pages';

const registerLink = Sites.OCCLink;

const xtraSmartData = {
  dtacReward: true,
  dtacWifi: true,
  sideBar: {
    subAdsText: 'แพ็กเกจสุดคุ้ม เลือกมิกซ์แอนด์แมทช์ ได้ตามสไตล์ธุรกิจของคุณ',
    haveSeparator: true,
    mainText: 'พร้อมส่วนลดรายเดือน 25% นาน 12 เดือน',
    bannerImage: {
      src: '/static/img/Pic women.png',
      floating: {
        height: 280,
        offsetTop: -33
      }
    },
    ribbon: {
      logo: '/static/img/logo/Xtra Smart.png',
      color: 'yellow',
    },
  },
  packageTable: {
    columns: [
      'package',
      'fee',
      'dataSize',
      'extFreeCall',
      'intFreeCall',
      'multiSim',
      'registerLink'
    ],
    columnText: {
      package: 'แพ็กเกจ',
      discountFee: 'ลด 25%',
      fee: 'ค่าบริการรายเดือน',
      dataSize: 'อินเทอร์เน็ต (4G/3G)',
      extFreeCall: 'โทรฟรีทุกเครือข่าย',
      intFreeCall: 'โทรฟรีในกลุ่ม',
      multiSim: 'มัลติซิม',
      registerLink: 'สมัครแพ็กเกจ'
    },
    rowGroups: [
      {
        name: 'blue',
        rows: [
          {
            package: 'xxxl',
            discountFee: 1124,
            fee: 1499,
            dataSize: '100 GB',
            extFreeCall: 'บุฟเฟต์ 24 ชม.',
            intFreeCall: 'บุฟเฟต์ 24 ชม.',
            multiSim: 'ฟรี 1 ซิม',
            registerLink: {
              link: registerLink,
              text: 'สมัคร'
            }
          }
        ]
      },
      {
        name: 'gold',
        rows: [
          {
            package: 'xxl',
            discountFee: 824,
            fee: 1099,
            dataSize: '50 GB',
            extFreeCall: 'บุฟเฟต์ 24 ชม.',
            intFreeCall: 'บุฟเฟต์ 24 ชม.',
            multiSim: 'ฟรี 1 ซิม',
            registerLink: {
              link: registerLink,
              text: 'สมัคร'
            }
          },
          {
            package: 'xl',
            discountFee: 674,
            fee: 899,
            dataSize: '30 GB',
            extFreeCall: '1000 นาที',
            intFreeCall: 'บุฟเฟต์ 24 ชม.',
            multiSim: 'รองรับ',
            registerLink: {
              link: registerLink,
              text: 'สมัคร'
            }
          }
        ]
      },
      {
        name: 'sliver',
        rows: [
          {
            package: 'l',
            discountFee: 524,
            fee: 699,
            dataSize: '15 GB',
            extFreeCall: '800 นาที',
            intFreeCall: 'บุฟเฟต์ 24 ชม.',
            multiSim: 'รองรับ',
            registerLink: {
              link: registerLink,
              text: 'สมัคร'
            }
          },
          {
            package: 'm',
            discountFee: 374,
            fee: 499,
            dataSize: '5 GB',
            extFreeCall: '500 นาที',
            intFreeCall: 'บุฟเฟต์ 24 ชม.',
            multiSim: 'รองรับ',
            registerLink: {
              link: registerLink,
              text: 'สมัคร'
            }
          },
          {
            package: 's',
            discountFee: null,
            fee: 299,
            dataSize: '2 GB',
            extFreeCall: '300 นาที',
            intFreeCall: 'บุฟเฟต์ 24 ชม.',
            multiSim: 'รองรับ',
            registerLink: {
              link: registerLink,
              text: 'สมัคร'
            }
          },
          {
            package: 'xs',
            discountFee: null,
            fee: 199,
            dataSize: '250 MB',
            extFreeCall: '200 นาที',
            intFreeCall: 'บุฟเฟต์ 24 ชม.',
            multiSim: 'รองรับ',
            registerLink: {
              link: registerLink,
              text: 'สมัคร'
            }
          },
        ]
      }
    ]
  }
};

export default xtraSmartData;
