import * as React from 'react';
import PropTypes from 'prop-types';
import './dMessageStep.scss'

const DMessageStep = props => (
  <div className="DMessageStep">
    <div className="DMessageStep__Title">
      ส่งข้อความหาคนนับพันได้ง่ายๆ แค่ 1-2-3
    </div>
    <div className="DMessageStep__StepContainer">
      {
        props.steps.map((step, i) => (
          <div key={`DMessageStep__Step--${i}`} className="DMessageStep__Step">
            <span className="DMessageStep__StepIndex">{`${i + 1}.`}</span>
            {step}
          </div>
        ))
      }
    </div>
  </div>
);

DMessageStep.propsType = {
  steps: PropTypes.arrayOf(PropTypes.string)
};

export default DMessageStep;
