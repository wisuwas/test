import React from 'react';
import './BlogDtacSme.scss';
import InfoBox from '../infoBox/InfoBox';

const BlogDtacSme = props => (
  <div className="WhyDtacSme">
    <img className="Banner" src={props.bannerImage} />
    <div className="WhyDtacSmeInfo">
      {props.infoBoxes.map((elem, i) => (
        <InfoBox
          titleColor="blue"
          infoItems={elem.infoItems}
          title={elem.title}
          key={`infoBox_${i}`}
          fontSize={elem.fontSize}
        />
      ))}
    </div>
  </div>
);

export default BlogDtacSme;
