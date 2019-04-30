import { Sites } from '../helpers/Pages';

const registerLink = Sites.OCCLink;
const DMessageRegister = Sites.DMessageRegister;

const iot = {
  dtacReward: false,
  dtacWifi: false,
  sideBar: {
    // mainText: 'ลดต้นทุนได้ ธุรกิจก็ไปได้สวย',
    bullets: [
      'ต้นทุนต่ำ',
      'จ่ายครั้งเดียวใช้ได้ 1 ปี',
      'มากถึง 100 MB ต่อเดือน',
      '3G/4G / 4G TDD (2300)',
      'รู้สถานะการเชื่อมต่อและตำแหน่งของซิม'
    ],
    haveSeparator: false,
    bannerImage: {
      src: '/static/img/banner-small-02.png',
      floating: {
        height: 280,
        offsetTop: -33
      }
    },
    ribbon: {
      text: <img src='/static/img/logo-IOT.png' />
    },
  },
  packageTable: {
    columns: [
      'fee_',
      'dataSize',
      'timePeriod',
      'registerLink'
    ],
    columnText: {
      fee_: <>ค่าบริการเหมาจ่าย<br/>ไม่รวม VAT (บาท/ปี)</>,
      dataSize: 'อินเทอร์เน็ต (4G/3G)',
      timePeriod: 'ระยะเวลาการใช้งาน',
      registerLink: 'สมัครแพ็กเกจ'
    },
    columnConfig: {
      fee_: {
        head: 'blue',
        body: '#F1F5F6'
      },
      dataSize: {
        head: 'blue',
        body: '#F1F5F6'
      },
      timePeriod: {
        head: 'blue',
        body: '#F1F5F6',
      },
      registerLink: {
        head: 'pink',
        body: '#F1F5F6'
      }
    },
    rowGroups: [
      {
        name: 'sliver',
        hasRibbon: false,
        rows: [
          {
            fee_: 420,
            dataSize: '10 MB',
            timePeriod: {
              text: '12 เดือน',
              rowSpan: 2
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
              rowSpan: 2
            }
          },
          {
            fee_: 540,
            dataSize: '100 MB'
          },
        ]
      }
    ]
  },
  packageContent: {
    content:[
      {
        header: 'เกี่ยวกับ IoT SIM',
        content: 'แพ็กเกจ IoT SIM ถูกออกแบบโดยเฉพาะสำหรับอุปกรณ์ IoT และ M2M ที่มีความต้องการรับส่งข้อมูลผ่านเครือข่ายโทรศัพท์มือถือระบบ 3G 4G และ 4G TDD  สามารถรองรับการรับส่งข้อมูลได้ถึง 100 MB ต่อเดือน SIM ถูกออกแบบเป็นไดคัท ผู้ใช้บริการสามารถเลือกขนาดของ SIM ให้เหมาะสมกับอุปกรณ์  แพ็กเกจ IoT SIM สามารถใช้งานโซโลชั่นไอโอทีทุกประเภทได้อย่างสมบูรณ์แบบในราคาที่สุดคุ้ม',
      },
      {
        header: 'ทำไมต้องใช้ IoT SIM',
        subheader: 'หมดความกังวลเรื่องค่าใช้จ่าย',
        content: 'ค่าบริการแบบเหมาจ่ายรายปี ไม่จำเป็นต้องเติมเงินหรือจ่ายบิลรายเดือน และไม่มีค่าใช้จ่ายจากบริการเสริมอีกต่อไป',
      },
      {
        subheader: 'จัดการ SIM ง่าย ๆ ด้วยตัวเอง',
        content: [ 'สามารถตรวจสอบข้อมูล SIM เช่น สถานะการใช้งาน สถานะการเชื่อมต่อ และตำแหน่งการใช้งาน ผ่านระบบ ',
          [
            (
              <a href="https://cmp.dtac.co.th/login">{'Connectivity Management Platform'}</a>
            ),
          ],
        ],
      },
      {
        subheader: 'ดูข้อมูลการใช้งาน และจัดการแพ็กเกจ',
        content: ['สามารถตรวจสอบข้อมูลการใช้งาน ค่าใช้จ่าย และเลือกแพ็กเกจเสริมผ่านเว็บไซต์ ', 
          [
            (
              <a href="https://corpeservice.dtac.co.th/eServiceCorp/Signin.jsp">{'e-service'}</a>
            ),
          ],
        ],
      },
      {
        subheader: 'สามารถหักภาษี ณ ที่จ่าย และออกใบกำกับภาษี',
        content: 'ค่าบริการแพ็กเกจ IoT SIM สามารถหักภาษี ณ ที่จ่าย และออกใบกำกับภาษีแบบเต็มรูปแบบได้',
      }
    ]
  }
};

export default iot;
