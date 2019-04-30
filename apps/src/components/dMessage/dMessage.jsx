import * as React from 'react';
import DMessageBanner from '../dMessageBanner/dMessageBanner';
import './dMessage.scss';
import DMessageFeatures from '../dMessageFeatures/dMessageFeatures';
import dMessageData from '../../data/dMessageData';
import DMessageStep from '../dMessageStep/dMessageStep';

const DMessage = () => {
  return (
    <div className="DMessage">
      <div className="DMessage__Banner">
        <DMessageBanner className="DMessage__BannerTable"/>
      </div>
      <div className="DMessage__Container">
        <img className="DMessage__Logo" src='/static/img/dMessage/logo.png'/>
        <div className="DMessage__Subtitle" >
          บริการที่ช่วยให้คุณสามารถส่ง SMS ไปยังเบอร์มือถือของลูกค้าหรือทีมงานพร้อมๆกันครั้งละหลายๆเบอร์ได้อย่างสะดวกรวดเร็วและประหยัดค่าใช้จ่าย บริการ dMessage มีจุดเด่นหลายอย่าง ที่จะช่วยให้การสื่อสารของคุณนั้นง่ายและดูเป็นมืออาชีพมากขึ้น
        </div>
        <div className="DMessage__FeatureContainer">
          <DMessageFeatures features={dMessageData.features}/>
        </div>
        <hr className="DMessage__Separator"/>
        <div className="DMessage__StepContainer">
          <DMessageStep steps={dMessageData.steps}/>
        </div>
      </div>
    </div>
  )
};

export default DMessage;
