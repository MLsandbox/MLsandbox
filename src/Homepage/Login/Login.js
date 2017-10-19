import React from 'react';
import { FormGroup, ControlLabel, FormControl, Modal, Button } from 'react-bootstrap';
var Loginform = () => {
  return (
    <div>
      <form>
        <FormGroup controlId="formControlsEmail">
          <ControlLabel>Email Address</ControlLabel>
          <FormControl type="text" placeholder="Enter Email"/>
        </FormGroup>
        <FormGroup controlId="formControlsPassword">
          <ControlLabel>Password</ControlLabel>
          <FormControl type="text" placeholder="Enter Password"/>
        </FormGroup>
      </form>
    </div>  
  );
}

var Login = (props) => {
  return (
  <div className="modal-container" >
    <Modal show={props.popupState} onHide={props.closePopup}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <Loginform />
          <Button onClick={props.signIn}>Sign In</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.closePopup} bsStyle="primary">Close</Button>
        </Modal.Footer>
    </Modal>
  </div>
  );
}

export default Login;