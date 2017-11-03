import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../Sandbox/Drawer/drawerStyles.css';

class Logout extends Component {
  constructor (props) {
    super (props);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  logoutHandler () {
    localStorage.removeItem('jwtToken');
    this.props.dispatch({type: 'LOGOUT'});
  }

  render () {
    if (this.props.authentication) {
      return (
        <a className="nav-link" onClick={this.logoutHandler}>
          Logout
        </a>
      );
    } else {
      return (<Redirect to={{ pathname: '/'}}/>);
    }
  }
}

export default connect((state) => {
  return { 
    authentication: state.auth.authentication.authorization,
  };
})(Logout);