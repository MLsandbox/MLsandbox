import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Options from './Options';
import Logout from '../Logout/index';
import jwt from 'jsonwebtoken';
import Dropdown from './Dashboard/Dropdown/Dropdown.js';

class Sandbox extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    var token = localStorage.jwtToken;
    this.props.dispatch({type:"VALIDATE_AUTH", user:jwt.decode(token)});
  }

  render () {
    return(
      <div className="sandbox-page">
        <Dropdown modelName="Sandbox"/>
        <Options />
      </div>
    )
  }
}

export default connect((store) => {
  return {
    user: store.auth.authentication.user.username
  }
})(Sandbox);
