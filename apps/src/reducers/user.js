import { actionTypes } from '../actions/user';

const defaultState = {
  username: '',
  displayName: '',
  isLoading: false,
  isLogin: false,
  isRequiredLogin: false,
  returnUrl: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        ...action.user,
        isLogin: action.user.displayName && action.user.username
      };
    case actionTypes.RECEIVE_RESPONSE:
      return {
        ...state,
        isLoading: false
      };
    case actionTypes.REQUEST_LOGIN:
    case actionTypes.REQUEST_SIGNOUT:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.SIGNOUT:
      return defaultState;
    case actionTypes.REQUEST_REQUIRE_LOGIN:
      return {
        ...state,
        isRequiredLogin: true,
        returnUrl: action.returnUrl
      };
    case actionTypes.RESET_REQUIRE_LOGIN:
      return {
        ...state,
        isRequiredLogin: false,
        returnUrl: ''
      };
    default:
      return state;
  }
}
