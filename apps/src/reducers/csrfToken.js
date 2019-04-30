import { actionTypes } from '../actions/csrfToken';

const defaultState = {
  token: '',
  tokenName: '',
  receivedAt: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_TOKEN:
      return {
        ...state,
        ...action.data,
        receivedAt: action.receivedAt
      };
    case actionTypes.REQUEST_TOKEN:
    default:
      return state;
  }
};

