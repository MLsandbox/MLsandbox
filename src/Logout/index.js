import React, { Component } from 'react';

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
    return (
      <div onClick={this.logoutHandler}>
        LOGOUT
      </div>
    )
  }
}

export default Logout;