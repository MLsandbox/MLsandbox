import React from 'react';
import { Link } from 'react-router-dom';
import Styles from '../Login.css';
import Loader from '../Loader';
import Body from './Loginbody';
import { FormGroup, ControlLabel, FormControl, Modal, Button } from 'react-bootstrap';

var renderLoad = (authState, props) => {
  if (authState) {
    return (<Loader/>);
  } else {
    return (<Body
      signIn={props.signIn} />);
  }
};

var Loginform = (props) => {
  return (
    <div className="login_container">
      <a href="#" id="close-body" data-dismiss="modal" onClick={props.onClose}
        aria-label="Close" className="close-button"></a>
      <div id="login">
        {renderLoad(props.authProcess, props)}
        <p className="login_p">Not a member? 
          <a id='form-body-link'href="#" onClick={props.switchForm}> Sign up now</a>
          <span className="fa fa-arrow-right"></span></p>
      </div>
    </div>
  );
};

export default Loginform;

