import axios from 'axios';

export function setPopupState (currentState) {
  return {
    type: 'SET_POPUP_STATE',
    show: !currentState,
  }
}

export function reqAuth (dispatch) {
  console.log('async auth req', this.username, this.password);
  dispatch({type: "REQ_AUTH"});
  axios.post("/api/logIn", {
    username: this.username,
    password: this.password,
  })
  .then((response) => {
    console.log(response);
    dispatch({type: "VALIDATE_AUTH"});
  })
  .catch((err) => {
    dispatch({type: "REQ_AUTH_FAIL"});
  })
}