import React, { Component } from 'react';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import { setPopupState, reqAuth } from '../Redux/Actions/actionTypes';
import { connect } from 'react-redux';
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
    console.log('logging in');
    this.props.dispatch(reqAuth);
  }

  render() {
    var popupState = this.props.popupState;
    return (
      <div>
        <h1>Welcome</h1>
          <img id="logo" src={logoSrc}/>
          <Login 
            signIn = {this.signIn} 
            closePopup={this.closePopup} 
            popupState={popupState}/>
          <div><a href="#" onClick={this.openPopup} >LOGIN</a></div>
          <Footer />
      </div>
    );
  }
}

var Homepagecomp = connect((store) => {
  return {
    popupState:store.login.loginPopup,
    authentication:store.auth.authentication,
    authenticating:store.auth.authenticating,
  }
})(Homepage)

export default Homepagecomp;