import { combineReducers } from 'redux';
import login from './loginReducer';
import auth from './authReducer';
import signup from './signupReducer';
import profState from './profSettingsReducer';

export default combineReducers({
  login,
  auth,
  signup,
  profState,
});