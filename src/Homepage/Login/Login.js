import React from 'react';
import { FormGroup, ControlLabel, FormControl, Modal, Button } from 'react-bootstrap';
import Loginform from './Loginform';
import Loader from './Loader';
var conditionalRender = (authState, props) => {
  if (authState) {
    return <Loader/>
  } else {
    return <Loginform signIn={props.signIn} signUp={props.signUp}/>
  }
}

var Login = (props) => {
  return (
  <div className="modal-container" >
    <Modal show={props.popupState} onHide={props.closePopup}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          {conditionalRender(props.authenticating, props)}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.closePopup} bsStyle="primary">Close</Button>
        </Modal.Footer>
    </Modal>
  </div>
  );
}

export default Login;