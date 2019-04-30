import React from 'react';
import './PackageCard.scss';
import PropTypes from 'prop-types';
import PackageTable from '../packageTable/PackageTable';
import PackageContent from '../packageContent/PackageContent';
import CardSideBar from '../cardSideBar/CardSideBar';
import PackagePrivilege from '../packagePrivilege/PackagePrivilege';

import CardHeadBar from '../cardHeadBar/CardHeadBar';

const PackageCard = (props) => {
  const { sideBar } = props;
  return (
    <div className="PackageCard">
      {
        sideBar &&
          <React.Fragment>
            <div className="PackageCard__SideBar">
              <CardSideBar
                overFlow={true}
                {...sideBar}
              />
            </div>
            <div className="PackageCard__HeadBar">
              <CardHeadBar
                {...sideBar}
              />
            </div>
          </React.Fragment>
      }
      <div className="PackageCard__Container">
        <div className="PackageCard__Row">
          <div className="PackageCard__TableContainer">
            <PackageTable {...props.packageTable} paddingForLabel={true}/>
          </div>
          {
            props.packageContent &&
            <div className="PackageCard__ContentContainer">
              <PackageContent {...props.packageContent}/>
            </div>
          }
          {
            props.dtacReward && props.dtacWifi &&
            <div className="PackageCard__PrivilegeContainer">
              <PackagePrivilege dtacReward={props.dtacReward} dtacWifi={props.dtacWifi} />
            </div>
          }
        </div>
      </div>
    </div>
  )
};

PackageCard.propTypes = {
  dtacWifi: PropTypes.bool,
  dtacReward: PropTypes.bool,
  sideBar: PropTypes.shape(CardSideBar.propTypes),
  packageTable: PropTypes.shape(PackageTable.propTypes),
  packageContent: PropTypes.shape(PackageContent.propTypes)
};

export default PackageCard
