import React from 'react';
import './ThankYou.scss';
import PropTypes from 'prop-types';
import SubmitButton from '../submitButton/SubmitButton';
import { withRouter } from 'next/router'
import Pages from '../../helpers/Pages'

const ThankYou = (props) => {
  const backToHomePage = (e) => {
    e.preventDefault();

    props.router.push(Pages.index);
  };

  return (
    <div className="ThankYou">
      <div className="ThankYou__Title">
        {props.title}
      </div>
      <div className="ThankYou__SubTitle">
        {props.subTitle}
      </div>
      <div className="ThankYou__ImageContainer">
        <img className="ThankYou__Image" src={props.imgSrc}/>
      </div>
      <div className="ThankYou__ButtonContainer">
        <SubmitButton text={props.buttonText} onClick={backToHomePage}/>
      </div>
    </div>
  );
};

ThankYou.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  imgSrc: PropTypes.string,
  buttonText: PropTypes.string,
  onClickButton: PropTypes.func,
};

export default withRouter(ThankYou);
