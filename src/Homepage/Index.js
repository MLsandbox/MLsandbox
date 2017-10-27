import React, { Component } from 'react';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import { setPopupState, reqAuth } from '../Redux/Actions/actionTypes';
import { connect } from 'react-redux';
import Logout from '../Logout/index';
var logoSrc = 'http://cleartheairchicago.com/files/2014/06/logo-placeholder.jpg';

class Homepage extends Component {
  constructor (props) {
    super(props);
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  closePopup () {
    this.props.dispatch(setPopupState());
  }

  openPopup () {
    this.props.dispatch(setPopupState());
  }

  signIn() {
    var username = document.getElementById("formControlsEmail").value;
    var password = document.getElementById("formControlsPassword").value
    var user = {
      username: username,
      password: password,
    }
    this.props.dispatch(reqAuth.bind(user));
  }

  render() {
    var popupState = this.props.popupState;
    return (
      <div>
        <h1>Welcome</h1>
          <img id="logo" src={logoSrc}/>
          <Login 
            processing = {this.props.processing}
            signIn = {this.signIn} 
            closePopup={this.closePopup} 
            popupState={popupState}/>
            <Logout dispatch={this.props.dispatch}/>
          <div><a href="#" onClick={this.openPopup} >LOGIN</a></div>
          <Footer />
      </div>
    );
  }
}

var Homepagecomp = connect((store) => {
  return {
    popupState:store.login.loginPopup,
    processing:store.auth.authentication.processing,
  }
})(Homepage)

export default Homepagecomp;