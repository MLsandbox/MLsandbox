import React, { Component } from 'react';
import Dropdown from './Dropdown';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import './index.css';
import Changepwform from './Changepw';
import Deleteform from './Deleteform';


class Settings extends Component {
  constructor(props) {
    super(props);
    this.reqPassChange = this.reqPassChange.bind(this);
    this.reqPassChangeHelper = this.reqPassChangeHelper.bind(this);
  }

  reqPassChangeHelper(req) {
    var valid = true;
    this.props.dispatch({type:'RESET_SIGNUP_ERRS'});
    if (req.password !== req.confirmPw) {
      valid = false;
      this.props.dispatch({type:'PW_MATCH_ERR'});
    }
    if(req.password.length < 6) {
      valid = false;
      this.props.dispatch({type:'PW_LEN_ERR'});
    }
    return valid;
  }

  reqPassChange () {
    var password = document.getElementById("new-pw-input").value;
    var confirmPw = document.getElementById("confirm-pw-input").value;
    var request = { password: password, confirmPw: confirmPw}
    this.reqPassChangeHelper(request);
  }

  componentDidMount() {
    var token = localStorage.jwtToken;
    this.props.dispatch({type:"VALIDATE_AUTH", user:jwt.decode(token)});
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