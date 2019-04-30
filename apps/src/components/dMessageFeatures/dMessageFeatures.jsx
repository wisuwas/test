import * as React from 'react';
import './dMessageFeatures.scss';

const DMessageFeatures = props => (
  <div className="DMessageFeature">
    {
      props.features.map((feature, i) => (
        <div className="DMessageFeature__Item" key={`feature-${i}`}>
          <img className="DMessageFeature__Image" src={feature.img}/>
          <div className="DMessageFeature__Text">
            {feature.text}
          </div>
        </div>
      ))
    }
  </div>
);

export default DMessageFeatures;
