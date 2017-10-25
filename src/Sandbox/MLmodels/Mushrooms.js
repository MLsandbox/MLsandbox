import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Mushrooms extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (    
      <div>
        <h1>Mushrooms Model</h1>
        <h1><Link to ="/sandbox">BACK</Link></h1>
      </div>
    );
  }
}

export default Mushrooms;