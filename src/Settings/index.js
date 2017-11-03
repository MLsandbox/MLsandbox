import React, { Component } from 'react';
import Dropdown from './Dropdown';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import './index.css';
import Changepwform from './Changepw';
import Deleteform from './Deleteform';
import { reqPwChange } from '../Redux/Actions/actionTypes';


class Settings extends Component {
  constructor(props) {
    super(props);
    this.reqPassChange = this.reqPassChange.bind(this);
    this.reqPassChangeHelper = this.reqPassChangeHelper.bind(this);
  }
  componentDidMount() {
    var token = localStorage.jwtToken;
    this.props.dispatch({type:"VALIDATE_AUTH", user:jwt.decode(token)});
    this.props.dispatch({type: 'RESET_PROFILE_STATE'});
  }

  reqPassChangeHelper(req) {
    var valid = true;
    this.props.dispatch({type:'RESET_SIGNUP_ERRS'});
    if (req.newPassword !== req.confirmPw) {
      valid = false;
      this.props.dispatch({type:'PW_MATCH_ERR'});
    }
    if(req.newPassword.length < 6) {
      valid = false;
      this.props.dispatch({type:'PW_LEN_ERR'});
    }
    return valid;
  }

  reqPassChange () {
    var newPassword = document.getElementById("new-pw-input").value;
    var confirmPw = document.getElementById("confirm-pw-input").value;
    var oldPassword = document.getElementById("old-pw-input").value;
    var request = { 
      username:this.props.user.username,
      oldPassword: oldPassword,
      newPassword: newPassword, 
      confirmPw: confirmPw}
    if(this.reqPassChangeHelper(request)) {
      this.props.dispatch(reqPwChange.bind(request));
    }
  }

  reqAccDelete () {
    var password = document.getElementById("del-password-input").value;
    var username = document.getElementById("del-username-input").value;
    var request = { 
      username: this.props.user.username,
      password: oldPassword,
    }
  }

  render() {
    return (
      <div id="settings-page">
        <Dropdown modelName="Profile Settings"/>
        <form id="user-settings-form">
          <Changepwform handleClick={this.reqPassChange}/>
          <Deleteform />
        </form>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    auth: store.auth.authentication.authorization,
    user: store.auth.authentication.user,
  }
})(Settings);