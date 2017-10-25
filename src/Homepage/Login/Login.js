import React from 'react';
import { FormGroup, ControlLabel, FormControl, Modal, Button } from 'react-bootstrap';
import Loginform from './Loginform';
import Loader from './Loader';
var conditionalRender = (authState, props) => {
  if (authState) {
    return <Loader/>
  } else {
    return <Loginform 
      signIn={props.signIn} 
      signUp={props.signUp}
      closePopup={props.closePopup}/>
  }
}

var Login = (props) => {
  return (
  <div className="modal-container">
    <Modal show={props.popupState} onHide={props.closePopup}>
      <Modal.Body>
        {conditionalRender(props.authenticating, props)}
      </Modal.Body>
    </Modal>
  </div>
  );
}

export default Login;