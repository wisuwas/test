import React from 'react';
import './ReportContainer.scss';

const ReportContainer = (props) => (
  <div className="ReportContainer">
    <div className="ReportContainer__Row">
      {props.children}
    </div>
  </div>
);

export default ReportContainer
