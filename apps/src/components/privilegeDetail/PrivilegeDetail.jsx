import React from 'react';
import './PrivilegeDetail.scss';
import { generateClassName } from '../../helpers/generateClassName';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailInline = (props) => (
  <div className={
    generateClassName(
      'Detail',
      {
        first: props.index === 0
      }
    )
  }>
    <div className="Detail__QualifiedMember">
      {
        !!props.privilege.includes('blue') &&
        <img key="blue" className="Detail__Logo" src="/static/img/logo/logo-member-blue-lg.png" />
      }
      {
        !!props.privilege.includes('gold') &&
        <img key="gold" className="Detail__Logo" src="/static/img/logo/logo-member-gold-lg.png" />
      }
      {
        !!props.privilege.includes('silver') &&
        <img key="silver" className="Detail__Logo" src="/static/img/logo/logo-member-silver-lg.png" />
      }
      {
        !!props.privilege.includes('all') &&
        <React.Fragment>
          <div className="Detail__AllDtac" >
            ลูกค้าดีแทคทุกคน และ
          </div>
          <div className="Detail__AllLogo">
            <img className="Detail__Logo" src="/static/img/logo/logo-member-blue-lg.png" />
            <img className="Detail__Logo" src="/static/img/logo/logo-member-gold-lg.png" />
            <img className="Detail__Logo" src="/static/img/logo/logo-member-silver-lg.png" />
          </div>
        </React.Fragment>
      }
    </div>
    <div className={generateClassName('Detail__Text', { alignStart: props.alignStart })}>
      {props.text}
    </div>
    {
      props.callCode &&
      <div className={
        generateClassName('Detail__CallCode', { full: props.full, alignStart: props.alignStart })
      }>
        <CallCode callCode={props.callCode}/>
      </div>
    }
  </div>
);

const DetailDoubleLine = (props) => (
  <div className={
    generateClassName(
      'Detail',
      {
        first: props.index === 0,
        doubleLine: true
      }
    )
  }>
    <div className="Detail__Container--dl">
      <div className="Detail__QualifiedMember">
        {
          !!props.privilege.includes('blue') &&
          <img key="blue" className="Detail__Logo" src="/static/img/logo/logo-member-blue-lg.png" />
        }
        {
          !!props.privilege.includes('gold') &&
          <img key="gold" className="Detail__Logo" src="/static/img/logo/logo-member-gold-lg.png" />
        }
        {
          !!props.privilege.includes('silver') &&
          <img key="silver" className="Detail__Logo" src="/static/img/logo/logo-member-silver-lg.png" />
        }
        {
          !!props.privilege.includes('all') &&
          <React.Fragment>
            <div className="Detail__AllDtac" >
              ลูกค้าดีแทคทุกคน และ
            </div>
            <div className="Detail__AllLogo">
              <img className="Detail__Logo" src="/static/img/logo/logo-member-blue-lg.png" />
              <img className="Detail__Logo" src="/static/img/logo/logo-member-gold-lg.png" />
              <img className="Detail__Logo" src="/static/img/logo/logo-member-silver-lg.png" />
            </div>
          </React.Fragment>
        }
      </div>
      {
        props.callCode &&
        <div className="Detail__CallCode Detail__CallCode--doubleLine-in">
          <CallCode callCode={props.callCode}/>
        </div>
      }
    </div>
    <div className={generateClassName('Detail__Text', { alignStart: props.alignStart })}>
      {props.text}
    </div>
    {
      props.callCode &&
      <div className="Detail__CallCode Detail__CallCode--doubleLine-out">
        <CallCode callCode={props.callCode}/>
      </div>
    }
  </div>
);

const CallCode = (props) => (
  <a className="CallCode" href={`tel:${props.callCode.replace('#','%23')}`}>
    กด
    <span className="CallCode__Code">
      {generateCallCodeElement(props.callCode)}
    </span>
    <FontAwesomeIcon className="CallCode__Icon" icon="phone"/>
  </a>
);

const generateCallCodeElement = (callCode) => {
  return (
    <React.Fragment>
      {
        callCode.split('*').map((item, i, items) => (
          <React.Fragment key={i}>
            {item}
            {
              i !== items.length - 1 &&
              <FontAwesomeIcon className="icon" icon="asterisk"/>
            }
          </React.Fragment>
        ))
      }
    </React.Fragment>
  )
};

export {
  DetailInline,
  DetailDoubleLine
};
