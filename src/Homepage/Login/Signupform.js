import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Login.css';
import { FormGroup, ControlLabel, FormControl, Modal, Button } from 'react-bootstrap';

var Loginform = (props) => {
  return (
    <div className="login_container">
      <div id="login">
        <a href="#" id="close-body" data-dismiss="modal" aria-label="Close" className="close-button"></a>
        <form id="login-fields">
        <fieldset className="clearfix">
          <p className="login_p"><span className="fa fa-user"></span>
            <input type="text" placeholder="Username" 
            id="formControlsEmail"
            required/></p>
          <p className="login_p"><span className="fa fa-lock"></span><input 
            id="formControlsPassword"
            type="password" 
            placeholder="Password" 
            required/></p> 
            <p className="login_p"><input onClick={props.signIn} type="button" defaultValue="Sign In"/></p>
        </fieldset>
        </form>
        <p className="login_p">Already Registered? 
          <a href="#">Login here</a>
          <span className="fontawesome-arrow-right"></span></p>
      </div>
    </div>
  );
}

export default Loginform;