import axios from 'axios';
import { getTokenHeader } from '../helpers/getTokenHeader';
import { fetchToken } from './csrfToken';
import { closeLogin, closeMenu, setLoginError, updateLoginInfo } from './menu';
import Router from 'next/router';
import Pages from '../helpers/Pages';

export const actionTypes = {
  REQUEST_LOGIN: 'REQUEST_LOGIN',
  REQUEST_SIGNOUT: 'REQUEST_SIGNOUT',
  UPDATE_USER: 'UPDATE_USER',
  SIGNOUT: 'SIGNOUT',
  RECEIVE_RESPONSE: 'RECEIVE_RESPONSE',
  REQUEST_REQUIRE_LOGIN: 'REQUEST_REQUIRE_LOGIN',
  RESET_REQUIRE_LOGIN: 'RESET_REQUIRE_LOGIN'
};

export const updateUser = (user) => ({
  user,
  type: actionTypes.UPDATE_USER,
});
export const receiveResponse = () => ({ type: actionTypes.RECEIVE_RESPONSE });
export const requestLogin = () => ({ type: actionTypes.REQUEST_LOGIN });
export const requestSignout = () => ({ type: actionTypes.REQUEST_SIGNOUT });
export const login = (username, password, csrfToken) => async (dispatch) => {
  if (!username || !password) {
    dispatch(setLoginError('กรุณาใส่ชื่อผู้ใช้งานหรือรหัสผ่าน'));
    return;
  }

  dispatch(requestLogin());

  let isAuthenticated = false;
  try {
    const response = await axios.post(
      '/api/login',
      {
        username,
        password
      },
      getTokenHeader(csrfToken)
    );

    const json = response.data;
    if (json.isAuthenticated) {
      dispatch(updateUser(json.user));
      dispatch(fetchToken());
      dispatch(setLoginError(''));
      dispatch(updateLoginInfo('',''));
      dispatch(closeLogin());
      isAuthenticated = true;
    } else {
      dispatch(setLoginError('ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง'));
    }
  } catch (e) {
    if (e.response && e.response.status === 401) {
      dispatch(setLoginError('ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง'));
    } else {
      dispatch(setLoginError('ระบบขัดข้อง กรุณาลองใหม่อีกครั้งค่ะ'));
      console.error(e);
    }
  } finally {
    dispatch(receiveResponse());
  }
  return isAuthenticated;
};
export const initUserToken = () => async (dispatch) => {
  const csrfToken = await dispatch(fetchToken());

  try {
    const response = await axios.post(
      '/api/login/validate',
      null,
      getTokenHeader(csrfToken)
    );

    const json = response.data;
    if (json.isAuthenticated) {
      dispatch(updateUser(json.user));
    }

  } catch (e) {
    console.error(e);
  } finally {
    dispatch(receiveResponse());
  }
};
export const signOut = (csrfToken, noRedirection) => async (dispatch) => {
  const token = csrfToken || await dispatch(fetchToken());

  dispatch(requestSignout());

  let response;
  try {
    response = await axios.post(
      '/api/signout',
      null,
      getTokenHeader(token)
    );
    dispatch({ type: actionTypes.SIGNOUT });
    dispatch(closeMenu());
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(receiveResponse());
    dispatch(fetchToken());
    if (!noRedirection && response.status === 200 &&
      (
        window.location.pathname === Pages.CustomerReportPage ||
        window.location.pathname === Pages.DealerReportPage
      )) {
      Router.push(Pages.index);
    }
  }
};
export const requireLogin = (returnUrl, csrfToken) => async (dispatch) => {
  await dispatch(signOut(csrfToken, true));

  Router.push(`${Pages.LoginPage}?returnUrl=${returnUrl}`);
};
export const requestRequireLogin = (returnUrl) => ({ type: actionTypes.REQUEST_REQUIRE_LOGIN, returnUrl });
export const resetRequireLogin = () => ({ type: actionTypes.RESET_REQUIRE_LOGIN });
