import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Homepagecomp from '../Homepage/Index';
import Bootstrap from 'bootstrap';
import store from '../Redux/store';

class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Homepagecomp />
        <h1><Link to ="/sandbox">Sandbox</Link></h1>
      </div>
    );
  }
} 

export default App;