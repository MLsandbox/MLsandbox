import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Logout extends Component {
  constructor (props) {
    super (props);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  logoutHandler () {
    console.log('you are logging out');
    localStorage.removeItem('jwtToken');
    this.props.dispatch({type:'LOGOUT'});
  }

  render () {
    console.log(this.props.authentication)
    if(this.props.authentication) {
      return (
        <div className="logout-btn" onClick={this.logoutHandler}>
        LOGOUT
        </div>
      )
    } else {
      return (<Redirect to={{ pathname: '/login'}}/>);
    }
  }
}

export default connect((state) => {
  return { 
    authentication: state.auth.authentication.authorization,
  }
})(Logout);;