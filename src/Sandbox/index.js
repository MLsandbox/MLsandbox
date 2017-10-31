import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Options from './Options';
import Logout from '../Logout/index';
import jwt from 'jsonwebtoken';

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
      <div>
        <h1>Hello, {this.props.user}</h1>
        <h1><Link to ="/Wiki">LEARN/INFORMATION</Link></h1>
        <h1><Link to ="/settings">Profile settings</Link></h1>
        <Logout />
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