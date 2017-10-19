import axios from 'axios';

export function setPopupState (currentState) {
  return {
    type: 'SET_POPUP_STATE',
    show: !currentState,
  }
}

export function reqAuth (dispatch) {
  dispatch({type: "REQ_AUTH"});
    axios.post("http://ec2-18-220-210-104.us-east-2.compute.amazonaws.com:1338/api/logIn", {
      username: "kokoro",
      password: "password",
    })
    .then((response) => {
      console.log(response);
      dispatch({type: "VALIDATE_AUTH"});
    })
    .catch((err) => {
      dispatch({type: "REQ_AUTH_FAIL"});
    })
}