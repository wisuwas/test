import { initUserToken } from './user';

export const actionTypes = {
  INITIAL_LOAD: 'INITIAL_LOAD'
};

export const setDoneInitialLoad = () => ({ type: actionTypes.INITIAL_LOAD });
export const initialLoad = () => async (dispatch) => {
  await dispatch(initUserToken());

  dispatch(setDoneInitialLoad());
};
