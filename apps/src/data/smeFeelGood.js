import { Sites } from '../helpers/Pages';

const registerLink = Sites.OCCLink;
const DMessageRegister = Sites.DMessageRegister;

const smeFeelGood = {
  dtacReward: true,
  dtacWifi: true,
  sideBar: {
    mainText: 'ลดต้นทุนได้ ธุรกิจก็ไปได้สวย',
    haveSeparator: false,
    bannerImage: {
      src: '/static/img/Pic women.png',
      floating: {
        height: 280,
        offsetTop: -33
      }
    },
    ribbon: {
      text: 'SME สบายใจ'
    },
  },
  packageTable: {
    columns: [
      'fee',
      'dataSize',
      'extFreeCall',
      'intFreeCall',
      'registerLink'
    ],
    columnText: {
      fee: 'ค่าบริการรายเดือน (บาท)',
      dataSize: 'อินเทอร์เน็ต (4G/3G) ใช้งานต่อเนื่อง',
      extFreeCall: 'โทรฟรีทุกเครือข่าย',
      intFreeCall: 'โทรฟรีในกลุ่ม',
      registerLink: 'สมัครแพ็กเกจ'
    },
    columnConfig: {
      fee: {
        head: 'blue',
        body: 'lightBlue'
      },
      dataSize: {
        head: 'blue',
        body: 'lightBlue'
      },
      extFreeCall: {
        head: 'yellow',
        body: 'lightYellow',
      },
      intFreeCall: {
        head: 'pink',
        body: 'lightPink',
      },
      registerLink: {
        head: 'blue',
        body: 'lightBlue'
      }
    },
    rowGroups: [
      {
        name: 'sliver',
        hasRibbon: true,
        rows: [
          {
            fee: 299,
            dataSize: '2 GB',
            extFreeCall: '400 นาที',
            intFreeCall: {
              text: 'ไม่อั้น',
              textSize: 25,
              rowSpan: 6,
              subText: '24 ชม.',
              subTextSize: 18,
              subTextOffsetTop: -8
            },
            registerLink: {
              btns: [{
                link: registerLink,
                text: 'สมัครออนไลน์',
                style: {
                  margin: "10px 0"
                }
              }, {
                link: DMessageRegister,
                text: 'ให้เจ้าหน้าที่ติดต่อกลับ',
                style: {
                  margin: "10px 0"
                }
              }],
              rowSpan: 6
            }
          },
          {
            fee: 449,
            dataSize: '6 GB',
            extFreeCall: {
              text: 'ไม่อั้น',
              textSize: 25,
              rowSpan: 5,
              subText: '24 ชม.',
              subTextSize: 18,
              subTextOffsetTop: -8,
              offsetTop: -55
            }
          },
        ]
      },
      {
        name: 'blue',
        hasRibbon: true,
        rows: [
          {
            fee: 599,
            dataSize: '16 GB'
          },
          {
            fee: 799,
            dataSize: '30 GB'
          },
          {
            fee: 999,
            dataSize: '50 GB'
          },
          {
            fee: '1,299',
            dataSize: '100 GB'
          },
        ]
      },
    ]
  }
};

export default smeFeelGood;
