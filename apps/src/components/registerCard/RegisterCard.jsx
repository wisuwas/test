import React from 'react';
import './RegisterCard.scss';
import CardSideBar from '../cardSideBar/CardSideBar';
import CardHeadBar from '../cardHeadBar/CardHeadBar';
import FormRegister from '../formRegister/FormRegister';
import ThankYou from '../thankYou/ThankYou';
import axios from 'axios';
import PropTypes from 'prop-types';

class RegisterCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: props.forceStartStep || 1
    };
  }

  onSubmitForm = (data, tokenHeader) =>
    axios.post(
      this.props.api.endpoint,
      data,
      tokenHeader);

  onSubmitSuccess = () => {
    this.setState({
      step: 2
    })
  };

  render() {
    return (
      <div className="RegisterCard">
        <div className="RegisterCard__SideBar">
          <CardSideBar {...this.props.sideBar}/>
        </div>
        <div className="RegisterCard__HeadBar">
          <CardHeadBar
            {...this.props.sideBar}
          />
        </div>
        <div className="RegisterCard__Container">
          {
            this.state.step === 1 &&
              <div className="RegisterCard__Register">
                <div className="RegisterCard__RegisterText">
                  {this.props.intro}
                </div>
                <FormRegister
                  {...this.props.form}
                  promiseSubmit={this.onSubmitForm}
                  onSubmitSuccess={this.props.onSubmitSuccess || this.onSubmitSuccess}/>
              </div>
          }
          {
            this.state.step === 2 &&
              <div className="RegisterCard__ThankYou">
                <ThankYou {...this.props.thankYou}/>
              </div>
          }
        </div>
      </div>
    );
  }
}

RegisterCard.propTypes = {
  form: PropTypes.shape(FormRegister.propTypes).isRequired,
  thankYou: PropTypes.shape(ThankYou.propTypes).isRequired,
  sideBar: PropTypes.shape(CardSideBar.propTypes),
  api: PropTypes.shape({
    endpoint: PropTypes.string
  }),
  intro: PropTypes.element,
  forceStartStep: PropTypes.number,
  onSubmitSuccess: PropTypes.func
};



export default RegisterCard
