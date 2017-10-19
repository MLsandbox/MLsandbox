import React, { Component } from 'react';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import { setPopupState } from '../Redux/Actions/actionTypes';
import { connect } from 'react-redux';
var logoSrc = 'http://cleartheairchicago.com/files/2014/06/logo-placeholder.jpg';

class Homepage extends Component {
  constructor (props) {
    super(props);
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  closePopup () {
    this.props.dispatch(setPopupState());
  }

  openPopup () {
    this.props.dispatch(setPopupState());
  }

  render() {
    var popupState = this.props.popupState;
    return (
      <div>
        <h1>Welcome</h1>
          <img id="logo" src={logoSrc}/>
          <Login closePopup={this.closePopup} popupState={popupState}/>
          <div><a href="#" onClick={this.openPopup} >LOGIN</a></div>
          <Footer />
      </div>
    );
  }
}

var Homepagecomp = connect((store) => {
  return {
    popupState:store.login.loginPopup,
  }
})(Homepage)

export default Homepagecomp;