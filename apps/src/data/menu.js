import Pages, { Sites } from '../helpers/Pages';

export default [
  {
    text: 'สมัครแพ็กเกจ dtac SME',
    dropDown: {
      items: [
        {
          text: 'เลือกเบอร์และสมัครแพ็กเกจออนไลน์',
          link: Sites.OCCLink
        },
        {
          text: 'ให้เจ้าหน้าที่ dtac SME ติดต่อกลับ',
          link: Pages.CustomerRegisterPage
        },
      ],
    }
  },
  {
    text: 'แพ็กเกจ dtac SME',
    dropDown: {
      items: [
        {
          text: 'แพ็กเกจหลัก',
          link: `${Pages.PackagePage}#main`
        },
        {
          text: 'แพ็กเกจเสริม',
          link: Pages.DMessagePackagePage
        },
        {
          text: 'แพ็กเกจ IoT',
          link: Pages.IoTPage
        }
      ],
      offset: 36
    }
  },
  {
    text: 'รู้จักกับ dtac SME',
    dropDown: {
      items: [
        {
          text: 'รู้จักกับ dtac SME',
          link: Pages.WhyDtacSmePage
        },
        {
          text: 'ข้อมูลสิทธิพิเศษ',
          link: Pages.PrivilegePage
        }
      ]
    }
  },
  {
    text: 'บริการดีๆจาก dtac SME',
    dropDown: {
      items: [
        {
          text: 'ข้อมูลบริการ dtac SME',
          link: Pages.SignUpStepPage
        },
        {
          text: 'เข้าใช้บริการ e-service',
          link: 'https://corpeservice.dtac.co.th/eServiceCorp/Signin.jsp'
        },
        {
          text: 'เข้าใช้บริการ dMessage',
          link: Sites.DMessageLink
        },
        {
          text: 'ค้นหา Store Locations',
          link: 'https://www.dtac.co.th/help/store-locations.html'
        }
      ],
      offset: 43
    },
  }
];
