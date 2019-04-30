import { combineReducers } from 'redux';
import menu from './menu';
import csrfToken from './csrfToken';
import user from './user';
import initialLoad from './initialLoad';

const rootReducer = combineReducers({
  menu,
  csrfToken,
  user,
  initialLoad
});

export default rootReducer;
