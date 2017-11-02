import React, { Component } from 'react';
import Dropdown from './Dropdown';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import './index.css';


class Settings extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var token = localStorage.jwtToken;
    this.props.dispatch({type:"VALIDATE_AUTH", user:jwt.decode(token)});
  }

  render() {
    return (
      <div id="settings-page">
        <Dropdown modelName="Profile Settings"/>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    auth: store.auth.authentication.authorization,
  }
})(Settings);