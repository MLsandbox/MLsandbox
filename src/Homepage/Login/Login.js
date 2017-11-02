import React, { Component } from 'react';
import Loginform from './Loginform';
import Signupform from './Signupform';
import Loader from './Loader';
import { connect } from 'react-redux';

var renderLoad = (authState, props) => {
  if (authState) {
    return <Loader/>
  } else {
    return <Loginform 
      signIn={props.signIn} />
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { formtype: 'login'};
    this.switchForm = this.switchForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderError = this.renderError.bind(this);
    this.onCloseResetError = this.onCloseResetError.bind(this);
  }

  switchForm() {
    this.props.dispatch({type:'RESET_ERROR'});
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
        />);
    }
    if ( this.state.formtype === 'signup') {
      return (
        <Signupform 
        switchForm={this.switchForm} 
        signUp={this.props.signUp}
        onClose = {this.onCloseResetError}
        />);
    }
  }

  onCloseResetError () {
    this.props.dispatch({type:'RESET_ERROR'});
  }

  render(){
    return (
      <div id="auth-popup" className="modal fade" tabIndex="-1" role="dialog" 
      aria-labelledby="exampleModalLiveLabel" style={{display: "none"}} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div  className="modal-body">
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
  }
})(Login);