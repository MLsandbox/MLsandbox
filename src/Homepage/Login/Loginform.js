import React from 'react';
import { FormGroup, ControlLabel, FormControl, Modal, Button } from 'react-bootstrap';

var Loginform = (props) => {
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
        <Button onClick={props.signIn}>Sign In</Button>
        <Button onClick={props.signUp}>Sign Up</Button>
      </form>
    </div>  
  );
}

export default Loginform;