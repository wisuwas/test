import React from 'react';
import PackageCard from '../packageCard/PackageCard';
import './PackageContainer.scss';
import smeFeelGood from '../../data/smeFeelGood';

const PackageContainer = () => (
  <div className="Package__Container">
    <div className="Package__Row">
      <PackageCard {...smeFeelGood} />
    </div>
  </div>
);

export default PackageContainer
