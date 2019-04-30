import * as React from 'react';
import withTerm from '../../hoc/withTerm/withTerm';
import BannerTable from '../bannerTable/BannerTable';
import './dMessageBanner.scss';

const DMessageBanner = props => {
  return (
    <div className={`DMessageBanner ${props.className || ''}`}>
      <div className="DMessageBanner__Header">
        เพียง 0.65 บาทต่อข้อความ
      </div>
      <div className="DMessageBanner__PromoTable">
        <BannerTable/>
      </div>
      <div className="DMessageBanner__FootNote">
        *ราคาดังกล่าวยังไม่รวมภาษีมูลค่าเพิ่ม
      </div>
    </div>
  );
};

export default withTerm(DMessageBanner, 'เงื่อนไขการใช้บริการ', false, { display: 'inline' });
