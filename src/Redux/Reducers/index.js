import { combineReducers } from "redux";
import login from "./loginReducer";
import auth from "./authReducer";
import signup from './signupReducer';

export default combineReducers({
  login,
  auth,
  signup,
});