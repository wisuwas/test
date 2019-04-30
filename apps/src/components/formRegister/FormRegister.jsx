import React from 'react';
import './FormRegister.scss';
import SubmitButton from '../submitButton/SubmitButton';
import PropTypes from 'prop-types';
import AlertBox from '../alertBox/AlertBox';
import { connect } from 'react-redux';
import { fetchToken } from '../../actions/csrfToken';
import { getTokenHeader } from '../../helpers/getTokenHeader';
import { generateClassName } from '../../helpers/generateClassName';

class FormRegister extends React.Component {
  constructor(props) {
    super(props);
    this.initInput(props.formData);

    this.state = {
      ...this.inputInitState,
      isError: false,
      errorText: '',
      inputError: {
        ...this.inputInitState
      },
      isLoading: false
    };
  }

  initInput(formData) {
    this.inputInitState = {};
    this.inputOnChange = {};

    formData.forEach(({ input }) => {
      this.inputInitState[input.name] = '';
      this.inputOnChange[input.name] = (event) =>
        this.setState({ [input.name]: event.target.value });
    });
  }

  getInputState = () => this.props.formData.reduce(
    (acc, { input }) => {
      acc[input.name] = this.state[input.name];
      return acc;
    },
    {});

  validateInput = () => this.props.formData.reduce(
    (acc, { input }) => {
      if (!this.validator[input.type](this.state[input.name])) {
        acc[input.name] = this.validatorErrorMessage[input.type];
      }
      return acc;
    },
    {});

  validatorErrorMessage = {
    tel: 'กรุณาใส่หมายเลขโทรศัพท์ให้ถูกต้อง',
    number: 'กรุณาใส่จำนวนให้ถูกต้อง',
    text: 'กรุณาใส่ข้อมูลให้ถูกต้อง'
  };

  validator = {
    tel: (input) => /^\+*(?:[-\d] ?){6,14}[\d]$/.test(input.toString()),
    number: (input) => /^\d+$/.test(input.toString()),
    text: (input) => !!input
  };

  resetErrorState = () => {
    this.setState({
      inputError: {
        ...this.inputInitState
      },
      isError: false,
      errorText: ''
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();

    this.resetErrorState();

    if (!this.props.promiseSubmit) return;

    try {
      const error = this.validateInput();

      if (Object.keys(error).length === 0) {
        this.setState({
          isLoading: true
        });

        await this.props.promiseSubmit(
          this.getInputState(),
          getTokenHeader(this.props.csrfToken)
        );

        this.setState({
          isLoading: false
        });

        this.props.onSubmitSuccess();
      } else {
        // set input error
        this.setState({
          inputError: {
            ...error
          }
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false
      });

      const { response } = error;
      if (response) {
        this.setState({
          isError: true,
          errorText: this.getErrorText(response.status)
        });

        // in case, csrf failed
        if (response.status === 400) this.props.requestToken();
      } else {
        this.setState({
          isError: true,
          errorText: this.getErrorText(500)
        });
      }
    }
  };

  getErrorText = (status) => {
    switch (status) {
      case 400:
        return 'ท่านได้ทำรายการไม่ถูกต้อง กรุณาทำใหม่อีกครั้งค่ะ';
      case 403:
        return 'ท่านได้ทำรายการไม่ถูกต้อง กรุณาทำใหม่อีกครั้งค่ะ';
      default:
        return 'ขออภัยระบบขัดข้อง กรุณาลองใหม่อีกครั้งค่ะ';
    }
  };

  render() {
    return (
      <form className="FormRegister" onSubmit={this.onFormSubmit} id={this.props.formName}>
        {
          this.state.isError &&
            <div className="FormRegister__ErrorBox">
              <AlertBox type="error">
                {this.state.errorText}
              </AlertBox>
            </div>
        }
        <div className="FormRegister__Container">
          {
            this.props.formData && this.props.formData.map(({ label, input }, i) => (
              <div className="FormRegister__InputBlock" key={`input-block-${i}`}>
                <label className="FormRegister__InputLabel">{label}</label>
                <input
                  {...input}
                  className={
                    generateClassName(
                      'FormRegister__InputBox',
                      {
                        error: !!this.state.inputError[input.name]
                      }
                    )
                  }
                  onChange={this.inputOnChange[input.name]}
                />
                {
                  this.state.inputError[input.name] &&
                  <div className="FormRegister__ErrorMessage">
                    {this.state.inputError[input.name]}
                  </div>
                }
              </div>
            ))
          }
        </div>
        <div className="FormRegister__ButtonContainer">
          <SubmitButton
            icon={this.state.isLoading ? 'sync' : 'angle-right'}
            isIconSpinning={this.state.isLoading}
            text={this.props.buttonText}
            type="submit"
            formName={this.props.formName}
          />
        </div>
      </form>
    );
  }
}

FormRegister.propTypes = {
  formData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      input: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        required: PropTypes.bool,
        placeholder: PropTypes.string
      })
    })
  ).isRequired,
  formName: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  promiseSubmit: PropTypes.func // Promise base
};

const mapStateToProps = (state) => ({
  csrfToken: state.csrfToken
});

const mapDispatchToProps = dispatch => ({
  requestToken: () => dispatch(fetchToken)
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);
