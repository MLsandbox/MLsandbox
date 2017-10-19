import React, { Component } from 'react';
import { connect } from 'react-redux';
import Options from './Options';

class Sandbox extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.authentication) {
      return (
        <div>
          <h1>Sandbox Component</h1>
          <Options />
        </div>
      );
    } else {
      return (
      <div>
        <h1>PLEASE LOGIN FIRST</h1>
      </div>
      )
    }
  }
}

var Sandboxcomp = connect((state) => {
  return { 
    authentication: state.auth.authentication,
  }
})(Sandbox);

export default Sandboxcomp;