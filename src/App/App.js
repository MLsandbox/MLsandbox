import React, { Component } from 'react';
import Homepagecomp from '../Homepage/Index';
import Bootstrap from 'bootstrap';
import store from '../Redux/store';

class App extends Component {
  render() {
    return (
      <div>
        <Homepagecomp />
      </div>
    );
  }
} 

export default App;