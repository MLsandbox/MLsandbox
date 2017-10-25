import React from 'react';
import Styles from './Login.css';
import { FormGroup, ControlLabel, FormControl, Modal, Button } from 'react-bootstrap';

var Loginform = (props) => {
  return (
    <div className="login_container">
      <div id="login">
        <a href="#" id="close-body" onClick={props.closePopup} className="close-button"></a>
        <form id="login-fields">
        <fieldset className="clearfix">
          <p className="login_p"><span className="fontawesome-user"></span>
            <input type="text" defaultValue="Username" 
            id="formControlsEmail"
            required/></p>
          <p className="login_p"><span className="fontawesome-lock"></span><input 
            id="formControlsPassword"
            type="password"  
            required/></p> 
            <p className="login_p"><input onClick={props.signIn} type="submit" defaultValue="Sign In"/></p>
        </fieldset>
        </form>
        <p className="login_p">Not a member? 
          <a onClick={props.signUp} 
            className="login_a" href="#">
          Sign up now</a>
          <span className="fontawesome-arrow-right"></span></p>
      </div>
    </div>
  );
}

export default Loginform;

