import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleMenu } from '../../actions/menu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './BurgerMenuButton.scss';

const BurgerMenuButton = (props) => (
  <button
    className={`BurgerMenuButton ${props.className || ""}`}
    onClick={props.toggleMenu}
  >
    <FontAwesomeIcon className="BurgerMenuButton__Icon" icon={props.menuOpen ? 'times' : 'bars'} />
  </button>
);

BurgerMenuButton.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = (state) => ({
  menuOpen: state.menu.menuOpen,
});

const mapDispatchToProps = {
  toggleMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenuButton);
