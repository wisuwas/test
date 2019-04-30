import React from 'react';
import './Term.scss';

const Term = props => (
  <div className="Term" style={props.style}>
    <a
      className={`Term__Link ${props.floatingLink && 'Term__Link--floating'}`}
      onClick={props.onToggle}
      onMouseLeave={props.onMouseLeave}
      onMouseEnter={props.onMouseEnter}
    >
      <span className="Term__Icon">i</span>
      {props.children}
    </a>
    {
      props.isOpen &&
      props.terms &&
      <div className="Term__Tooltip">
        <ul className="Term__List">
          {
            props.terms.map((term, i) => (
              <li className="Term__List" key={`term-${i}`}>{term}</li>
            ))
          }
        </ul>
      </div>
    }
  </div>
);

export default Term
