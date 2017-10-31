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
      <div className="sandbox-page">
        <div className="greeting">Hello, {this.props.user}</div>
        <div className="wiki-link"><Link to ="/Wiki">LEARN/INFORMATION</Link></div>
        <div className="profile-link"><Link to ="/settings">Profile settings</Link></div>
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