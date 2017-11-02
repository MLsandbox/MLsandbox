import React from 'react';
import { Link } from 'react-router-dom';
import Styles from '../Login.css';
import Loader from '../Loader';
import { FormGroup, ControlLabel, FormControl, Modal, Button } from 'react-bootstrap';

var renderLoad = (authState, props) => {
  if (authState) {
    return <Loader/>
  } else {
    return <Loginform 
      signIn={props.signIn} />
  }
}

var Signupform = (props) => {
  return (
    <div className="login_container">
      <a href="#" id="close-body" data-dismiss="modal" onClick={props.onClose} 
        aria-label="Close" className="close-button"></a>
      <div id="login">
        <form id="login-fields">
        <fieldset className="clearfix">
          <p className="login_p"><span className="fa fa-user"></span>
            <input type="text" placeholder="Username" 
            id="signupEmail"
            required/></p>
          <p className="login_p"><span className="fa fa-lock"></span><input 
            id="signupPassword"
            type="password" 
            placeholder="Password" 
            required/></p> 
          <p className="login_p"><span className="fa fa-lock"></span><input 
            id="confirmPassword"
            type="password" 
            placeholder="Confirm Password" 
            required/></p> 
          <p className="login_p"><input onClick={props.signUp} type="button" defaultValue="Sign Up"/></p>  
        </fieldset>
        </form>
        <p className="login_p">Already Registered? 
          <a href="#" onClick={props.switchForm}>Login here</a>
          <span className="fa fa-arrow-right"></span></p>
      </div>
    </div>
  );
}

export default Signupform;