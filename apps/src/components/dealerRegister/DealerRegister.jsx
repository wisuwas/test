import React from 'react';
import './DealerRegister.scss';
import data from '../../data/dealerRegisterData';
import ReportContainer from '../reportContainer/ReportContainer';
import RegisterCard from '../registerCard/RegisterCard';
import Pages from '../../helpers/Pages';


const getIntroElement = () => (
  <div>
    <div>
      สมัครเป็นผู้แทนจำหน่าย dtac SME ได้ง่ายๆ เพียงมีคุณสมบัติเบื้องต้น ตามเงื่อนไงของการเป็นผู้แทนจำหน่ายดีแทค SME ดังนี้
    </div>
    <div>
      <ul>
        <li>
          บุคคลธรรมดา หรือ จดทะเบียนเป็นนิติบุคคลโดยมีทุนจดทะเบียนขั้นต่ำ 500,000 บาท
        </li>
        <li>
          มีพนักงานขายอย่างน้อย 1 คน
        </li>
        <li>
          มีอุปกรณ์พื้นฐานสำหรับการเข้าสู่ระบบทำงานเช่น คอมพิวเตอร์ หรือ โน๊ตบุ๊ต
        </li>
      </ul>
    </div>
    <div>
      กรุณากรอกข้อมูล เพื่อทีมงาน dtac SME ติดต่อกลับ
    </div>
  </div>
);

const onSubmitSuccess = () => {
  window.location.href = Pages.DealerThankYouPage;
};

const DealerRegister = props => (
  <ReportContainer>
    <RegisterCard
      {...data}
      intro={getIntroElement()}
      forceStartStep={props.forceStartStep}
      onSubmitSuccess={onSubmitSuccess}
    />
  </ReportContainer>
);

export default DealerRegister
