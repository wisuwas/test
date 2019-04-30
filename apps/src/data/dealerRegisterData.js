import { sideBarContent } from '../components/cardSideBar/CardSideBar';

export default {
  form: {
    formData: [
      {
        label: 'ชื่อ',
        input: {
          name: 'firstName',
          type: 'text',
          required: true
        }
      },
      {
        label: 'นามสกุล',
        input: {
          name: 'lastName',
          type: 'text',
          required: true
        }
      },
      {
        label: 'ชื่อบริษัท',
        input: {
          name: 'companyName',
          type: 'text',
          required: true
        }
      },
      {
        label: 'เบอร์มือถือ',
        input: {
          name: 'phoneNumber',
          type: 'tel',
          placeholder: 'xxx-xxx-xxxx',
          required: true
        }
      },
      {
        label: 'ที่อยู่',
        input: {
          name: 'address',
          type: 'text',
          required: true
        }
      },
      {
        label: 'พื้นที่ที่สนใจทำการขาย (จังหวัด/อำเภอ)',
        input: {
          name: 'interestedOperateArea',
          type: 'text',
          required: true
        }
      }
    ],
    buttonText: 'ส่งข้อมูล',
    formName: 'customerRegister'
  },
  thankYou: {
    title: 'ขอขอบคุณที่ท่านให้ความสนใจ เป็นผู้แทนจำหน่ายดีแทค SME',
    subTitle: 'ทีมงาน dtac SME จะรีบติดต่อกลับโดยเร็วที่สุดค่ะ',
    imgSrc: '/static/img/operator.png',
    buttonText: 'กลับสู่หน้าหลัก'
  },
  sideBar: {
    mainText: 'เปิดโอกาสสำหรับนักธุรกิจทั่วประเทศที่สนใจเป็นผู้แทนจำหน่ายดีแทค SME',
    subAdsText: 'ได้รับผลตอบแทนจากการจำหน่ายซิมจดทะเบียนให้กับลูกค้า SME พร้อมส่วนแบ่งรายได้ตลอดอายุการใช้งาน และแคมเปญส่งเสริมการขายต่างๆ',
    haveSeparator: true,
    innerImage: '/static/img/dtac-sme-white.png',
    bannerImage: {
      src: '/static/img/dtac-dealer-register.png',
      floating: {
        height: 180,
        offsetTop: -33
      }
    },
    contentOrder: [
      sideBarContent.innerImage,
      sideBarContent.mainText,
      sideBarContent.separator,
      sideBarContent.subAdsText
    ],
    smallMain: false,
    narrowMain: false,
    overFlow: false
  },
  api: {
    endpoint: '/api/dealer'
  }
};
