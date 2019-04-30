import React from 'react';
import data from '../../data/customerRegisterData';
import ReportContainer from '../reportContainer/ReportContainer';
import RegisterCard from '../registerCard/RegisterCard';
import Pages from '../../helpers/Pages';

const getIntroElement = () => (
  <React.Fragment>
    สนใจแพ็กเกจ dtac SME เพียงกรอกข้อมูล เพื่อให้เจ้าหน้าที่ติดต่อกลับ
  </React.Fragment>
);

const onSubmitSuccess = () => {
  window.location.href = Pages.CustomerThankYouPage;
};

const CustomerRegister = props => (
  <ReportContainer>
    <RegisterCard
      {...data}
      intro={getIntroElement()}
      forceStartStep={props.forceStartStep}
      onSubmitSuccess={onSubmitSuccess}
    />
  </ReportContainer>
);

export default CustomerRegister
