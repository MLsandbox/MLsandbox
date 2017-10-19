import React, { Component } from 'react';
import Options from './Options';
class Sandbox extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Sandbox Component</h1>
        <Options />
      </div>
    );
  }
}

export default Sandbox;