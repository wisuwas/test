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
        label: 'จำนวนเบอร์ที่คาดว่าจะใช้ในธุรกิจ',
        input: {
          name: 'numberOfRequest',
          type: 'number',
          required: true
        }
      }
    ],
    buttonText: 'ส่งข้อมูล',
    formName: 'customerRegister'
  },
  thankYou: {
    title: 'ขอขอบคุณที่ท่านให้ความสนใจ เลือกใช้บริการ dtac SME สำหรับธุรกิจของท่าน',
    subTitle: 'เจ้าหน้าที่ SME care จะติดต่อกลับไปยังท่าน เพื่อแจ้งข้อมูลพิ่มเติม',
    imgSrc: '/static/img/operator.png',
    buttonText: 'กลับสู่หน้าหลัก'
  },
  sideBar: {
    mainText: 'ตัวช่วยคุณสำหรับการทำธุรกิจ เรามีแพ็กเกจที่เหมาะแก่การทำธุรกิจของคุณ',
    innerImage: '/static/img/dtac-sme-white.png',
    bannerImage: {
      src: '/static/img/dtac-customer-register.png',
      floating: {
        height: 182,
        offsetTop: -18
      }
    },
    smallMain: true,
    narrowMain: true,
    overFlow: false
  },
  api: {
    endpoint: '/api/customer'
  }
};
