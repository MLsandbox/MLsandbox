import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Housing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (    
      <div>
        <h1>I AM THE HOUSING COMP</h1>
        <h1><Link to ="/sandbox">BACK</Link></h1>
      </div>
    );
  }
}

export default Housing;