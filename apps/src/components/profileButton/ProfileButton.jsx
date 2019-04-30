import React from 'react';
import { AlignMiddleImage } from '../styledElements';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ProfileButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileButton = (props) => (
  !props.doneInitialLoad ?
    <button className="Profile">
      <FontAwesomeIcon className="Profile__LoadingIcon" icon={"sync"} spin/>
    </button> :
    <button className="Profile" onClick={props.onClick}>
      {
        !props.user.displayName &&
        !props.mobile &&
          <span className="Profile__Name">Login</span>
      }
      <AlignMiddleImage className="Profile__Avatar" src="/static/img/icon-profile.svg"/>
      {
        props.user.displayName &&
          <span className="Profile__Name Profile__Name--right">
            {props.user.displayName}
          </span>
      }
      {
        !props.user.displayName &&
        props.mobile &&
          <span className="Profile__Name">Login</span>
      }
    </button>
);

ProfileButton.propTypes = {
  onClick: PropTypes.func,
  mobile: PropTypes.bool
};

const mapStateToProps = (state) => ({
  user: state.user,
  doneInitialLoad: state.initialLoad.done
});

export default connect(mapStateToProps, null)(ProfileButton);
