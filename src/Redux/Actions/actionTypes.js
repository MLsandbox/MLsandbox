import axios from 'axios';
import jwt from 'jsonwebtoken';

export function setPopupState (currentState) {
  return {
    type: 'SET_POPUP_STATE',
    show: !currentState,
  }
}

export function reqAuth (dispatch) {
  dispatch({type: "REQ_AUTH"});
  axios.post("/api/logIn", {
    username: this.username,
    password: this.password,
  })
  .then((response) => {
    if(response.data === 'invalid') {
      dispatch({type: 'INVALID_AUTH'});
    } else {
      const token = response.data.token;
      localStorage.setItem('jwtToken', response.data.token);
      dispatch({type:"VALIDATE_AUTH", user:jwt.decode(token)});
    }
  })
  .catch((err) => {
    dispatch({type: "REQ_AUTH_FAIL"});
  })
}

export function reqSignup (dispatch) {
  dispatch({type: "REQ_AUTH"});
  axios.post("/api/signUp", {
    username: this.username,
    password: this.password,
  })
  .then((response) => {
    if(response.data === 'exists' || response.data === 'invalid signup info') {
      dispatch({type: 'INVALID_SIGNUP', data: response.data});
    } else {
      const token = response.data.token;
      localStorage.setItem('jwtToken', response.data.token);
      dispatch({type:"VALIDATE_AUTH", user:jwt.decode(token)});
    }
  })
  .catch((err) => {
    dispatch({type: "REQ_AUTH_FAIL"});
  })
}

export function reqPwChange (dispatch) {
  axios.post("/api/changePassword", {
    username: this.username,
    password: this.oldPassword,
    newPassword: this.newPassword,
  })
  .then((response) => {
    if(response.data === 'incorrect password!') {
      dispatch({type: 'PW_CHANGE_FAIL', data: response.data});
    } else {
      dispatch({type: 'PW_CHANGE_SUCCESS', data: response.data});
    }
  })
  .catch((err) => {
    dispatch({type: "RESET_PROFILE_STATE"});
  })
}