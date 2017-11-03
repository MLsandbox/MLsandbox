import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Login from './Login/Login';
import { setPopupState, reqAuth, reqSignup } from '../Redux/Actions/actionTypes';
import { connect } from 'react-redux';
import Logout from '../Logout/index';
import Styles from './index.css';

class Homepage extends Component {
  constructor (props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.redirect = this.redirect.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  signIn() {
    var username = document.getElementById('formControlsEmail').value;
    var password = document.getElementById('formControlsPassword').value;
    var user = {
      username: username,
      password: password,
    };
    this.props.dispatch(reqAuth.bind(user));
  }

  signUpHelper (user) {
    var valid = true;
    this.props.dispatch({type: 'RESET_SIGNUP_ERRS'});
    if (user.password !== user.confirmPw) {
      valid = false;
      this.props.dispatch({type: 'PW_MATCH_ERR'});
    }
    if (user.password.length < 6) {
      valid = false;
      this.props.dispatch({type: 'PW_LEN_ERR'});
    }
    if (user.username.length < 3 || user.username.length > 12) {
      valid = false;
      this.props.dispatch({type: 'USER_LEN_ERR'});
    }
    return valid;
  }

  signUp () {
    var username = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var confirmPw = document.getElementById('confirmPassword').value;
    var user = {
      username: username,
      password: password,
      confirmPw: confirmPw,
    };
    if ( this.signUpHelper(user) ) {
      this.props.dispatch(reqSignup.bind(user));
    }
  }

  redirect() {
    if (this.props.auth) {
      if ( document.getElementById('close-body') ) {
        document.getElementById('close-body').click();
      }
      return (<Redirect to={{pathname: '/sandbox'}} />);
    }
  }

  render() {
    var popupState = this.props.popupState;
    return (
      <div id="homepage-root">
        <Login 
          processing = {this.props.processing}
          signIn = {this.signIn} 
          signUp = {this.signUp}
        />
        <a href="https://github.com/MLsandbox">
          <img className="git-hub-banner" src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"/>
        </a>
        <section className="intro">
          <div className="inner">
            <div className="content">
              <h1>ml-sandbox</h1>
              <a id="login-btn" href="#" data-toggle="modal" data-target="#auth-popup" >LOGIN</a>
              {this.redirect()}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

var Homepagecomp = connect((store) => {
  return {
    processing: store.auth.authentication.processing,
    auth: store.auth.authentication.authorization,
  };
})(Homepage);

export default Homepagecomp;
