import React, { Component } from 'react';
import Loginform from './Loginform/Loginform';
import Signupform from './Signupform/Signupform';
import { connect } from 'react-redux';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { formtype: 'login'};
    this.switchForm = this.switchForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderError = this.renderError.bind(this);
    this.renderSignupErrs = this.renderSignupErrs.bind(this);
    this.onCloseResetError = this.onCloseResetError.bind(this);
  }

  switchForm() {
    this.props.dispatch({type:'RESET_ERROR'});
    this.props.dispatch({type:'RESET_SIGNUP_ERRS'});
    if ( this.state.formtype === 'login') {
      this.setState({formtype: 'signup'});
    }
    if ( this.state.formtype === 'signup') {
      this.setState({formtype: 'login'});
    }
  }

  renderError() {
    var err = this.props.authError;
    if (err) {
      return (  
        <div id="error-warn" className="alert alert-danger">
          <strong>Danger!</strong> { err }
        </div>
      );
    }
  }
  renderForm() {
    if ( this.state.formtype === 'login') {
      return (
        <Loginform 
        switchForm={this.switchForm} 
        signIn={this.props.signIn}
        onClose = {this.onCloseResetError}
        authProcess = {this.props.authProcess}
        />);
    }
    if ( this.state.formtype === 'signup') {
      return (
        <Signupform 
        switchForm={this.switchForm} 
        signUp={this.props.signUp}
        onClose = {this.onCloseResetError}
        authProcess = {this.props.authProcess}
        />);
    }
  }

  onCloseResetError () {
    this.props.dispatch({type:'RESET_SIGNUP_ERRS'});
    this.props.dispatch({type:'RESET_ERROR'});
  }

  renderSignupErrs() {
    var errs = [];
    var pwLen = this.props.signupErrs.pwLen;
    var pwMatch = this.props.signupErrs.pwMatch;
    var usrLen = this.props.signupErrs.usrLen;
    if (pwLen) {
      errs.push(
        <div key="signerr1" className="alert alert-danger signup-err">
          <strong>*REQUIRE </strong>PASSWORD NEEDS TO BE AT LEAST 6 CHARACTERS
        </div>);
    }
    if (usrLen) {
      errs.push(
        <div key="signerr2" className="alert alert-danger signup-err">
          <strong>*REQUIRE </strong>USERNAME CAN ONLY BE BETWEEN 3 - 12 CHARACTERS
        </div>);
    }
    if (pwMatch) {
      errs.push(
        <div key="signerr3" className="alert alert-danger signup-err">
          <strong>*REQUIRE </strong>PASSWORDS DON'T MATCH
        </div>);
    }
    return errs;
  }

  render(){
    return (
      <div id="auth-popup" className="modal fade" tabIndex="-1" role="dialog" 
      aria-labelledby="exampleModalLiveLabel" style={{display: "none"}} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div  className="modal-body">
            { this.renderSignupErrs() }
            { this.renderError() }
            { this.renderForm() }
            </div>
          </div>
        </div>
      </div>
    
    );
  }
}

export default connect((store) => {
  return {
    authError: store.auth.authentication.error,
    signupErrs: store.signup.signupErrs,
    authProcess: store.auth.authentication.processing,
  }
})(Login);