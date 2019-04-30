import React from 'react';
import PackageCard from '../packageCard/PackageCard';
import './IotContainer.scss';
import iotPackageData from '../../data/iot'

const PackageContainer = () => (
  <div className="IotPackage__Container">
    <div className="IotPackage__Row">
      <PackageCard {...iotPackageData} />
    </div>
  </div>
);

export default PackageContainer
