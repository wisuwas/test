import React from 'react';
import PropTypes from 'prop-types';
import './PackagePrivilege.scss';
import { generateClassName } from '../../helpers/generateClassName';

const PackagePrivilege = (props) => (
  <div className="PackagePrivilege">
    {
      props.dtacWifi &&
      <PrivilegeItem
        name='DtacWifi'
        logoSrc='/static/img/logo/logo-dtac-wifi.png'
        text='ไม่จำกัดทุกแพ็กเกจ'
      />
    }
    {
      props.dtacWifi &&
      props.dtacReward && (
        <div className="Separator" />
      )
    }
    {
      props.dtacReward && (
        <PrivilegeItem
          name='DtacReward'
          logoSrc='/static/img/logo-reward.png'
          text='รับสิทธิทันทีโดยไม่ต้องรอ 6 เดือน'
        />
      )
    }
  </div>
);

PackagePrivilege.propsType = {
  dtacReward: PropTypes.bool,
  dtacWifi: PropTypes.bool
};

const PrivilegeItem = (props) => (
  <div className="PrivilegeItem">
    <img className={generateClassName('PrivilegeItem__Logo', { wifi: props.name === 'DtacWifi' })} src={props.logoSrc} />
    <span>{props.text}</span>
  </div>
);

PrivilegeItem.propsType = {
  text: PropTypes.string,
  name: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired
};

export default PackagePrivilege;
