import { actionTypes } from '../actions/menu';

const defaultState = {
  menuOpen: false,
  loginOpen: false,
  username: '',
  password: '',
  loginError: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MENU:
      return {
        ...state,
        menuOpen: true
      };
    case actionTypes.CLOSE_MENU:
      return {
        ...state,
        menuOpen: false,
        loginError: ''
      };
    case actionTypes.TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
        loginError: ''
      };
    case actionTypes.CHANGE_MENU_STATE:
      return {
        ...state,
        menuOpen: action.isMenuOpen,
        loginOpen: action.isMenuOpen,
      };
    case actionTypes.TOGGLE_LOGIN:
      return {
        ...state,
        menuOpen: !state.loginOpen,
        loginOpen: !state.loginOpen,
        loginError: ''
      };
    case actionTypes.OPEN_LOGIN:
      return {
        ...state,
        loginOpen: true
      };
    case actionTypes.CLOSE_LOGIN:
      return {
        ...state,
        loginOpen: false,
        password: '',
        loginError: ''
      };
    case actionTypes.UPDATE_LOGIN_INFO:
      return {
        ...state,
        username: action.username,
        password: action.password
      };
    case actionTypes.SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.errorText
      };
    default:
      return state;
  }
};

