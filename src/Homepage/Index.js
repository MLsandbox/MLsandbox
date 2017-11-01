import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import { setPopupState, reqAuth } from '../Redux/Actions/actionTypes';
import { connect } from 'react-redux';
import Logout from '../Logout/index';
import Styles from'./index.css';

class Homepage extends Component {
  constructor (props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.redirect = this.redirect.bind(this);
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

  redirect(){
    if(this.props.auth) {
      if( document.getElementById('close-body') ) {
        document.getElementById('close-body').click();
      }
      return (<Redirect to={{pathname:"/sandbox"}} />);
    }
  }

  render() {
    var popupState = this.props.popupState;
    return (
      <div id="homepage-root">
        <Login 
        processing = {this.props.processing}
        signIn = {this.signIn} />
        <section className="intro">
          <div className="inner">
            <div className="content">
                <h1>Welcome</h1>
                <a id="login-btn" href="#" data-toggle="modal" data-target="#auth-popup" >LOGIN</a>
                {this.redirect()};
            </div>
          </div>
        </section>
        <Footer />
        <h1><Link to ="/sandbox">Sandbox</Link></h1>
      </div>
    );
  }
}

var Homepagecomp = connect((store) => {
  return {
    processing:store.auth.authentication.processing,
    auth: store.auth.authentication.authorization,
  }
})(Homepage)

export default Homepagecomp;
