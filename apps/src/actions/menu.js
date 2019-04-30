import { resetRequireLogin } from './user';

export const actionTypes = {
  OPEN_MENU: 'OPEN_MENU',
  CLOSE_MENU: 'CLOSE_MENU',
  TOGGLE_MENU: 'TOGGLE_MENU',
  CHANGE_MENU_STATE: 'CHANGE_MENU_STATE',
  TOGGLE_LOGIN: 'TOGGLE_LOGIN',
  OPEN_LOGIN: 'OPEN_LOGIN',
  CLOSE_LOGIN: 'CLOSE_LOGIN',
  UPDATE_LOGIN_INFO: 'UPDATE_LOGIN_INFO',
  SET_LOGIN_ERROR: 'SET_LOGIN_ERROR'
};

export const openMenu = () => ({ type: actionTypes.OPEN_MENU });
export const closeMenu = () => (dispatch) => {
  dispatch(resetRequireLogin());
  dispatch({ type: actionTypes.CLOSE_MENU });
};
export const toggleMenu = () => ({ type: actionTypes.TOGGLE_MENU });
export const changeMenu = (isMenuOpen) => ({ isMenuOpen, type: actionTypes.CHANGE_MENU_STATE });
export const openLogin = () => ({ type: actionTypes.OPEN_LOGIN });
export const closeLogin = () => ({ type: actionTypes.CLOSE_LOGIN });
export const toggleLogin = () => ({ type: actionTypes.TOGGLE_LOGIN });
export const updateLoginInfo = (username, password) => ({ username, password, type: actionTypes.UPDATE_LOGIN_INFO });
export const setLoginError = (errorText) => ({ type: actionTypes.SET_LOGIN_ERROR, errorText });
