import { actionTypes } from '../actions/initialLoad';

const defaultState = {
  done: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INITIAL_LOAD:
      return {
        ...state,
        done: true
      };
    default:
      return state;
  }
}
