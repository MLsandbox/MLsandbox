import axios from 'axios';

export function setPopupState (currentState) {
  return {
    type: 'SET_POPUP_STATE',
    show: !currentState,
  }
}

export function reqAuth (dispatch) {
  dispatch({type: "REQ_AUTH"});
    axios.get("http://localhost:8080/login")
    .then((response) => {
      dispatch({type: "VALIDATE_AUTH"})
    })
    .catch((err) => {
      dispatch({type: "REQ_AUTH_FAIL"})
    })
}