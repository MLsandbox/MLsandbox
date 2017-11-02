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

var Loginform = (props) => {
  return (
    <div className="login_container">
      <a href="#" id="close-body" data-dismiss="modal" onClick={props.onClose}
        aria-label="Close" className="close-button"></a>
      <div id="login">
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
            <p className="login_p"><input onClick={props.signIn} type="button" defaultValue="Log In"/></p>
        </fieldset>
        </form>
        <p className="login_p">Not a member? 
          <a href="#" onClick={props.switchForm}>Sign up now</a>
          <span className="fa fa-arrow-right"></span></p>
      </div>
    </div>
  );
}

export default Loginform;

