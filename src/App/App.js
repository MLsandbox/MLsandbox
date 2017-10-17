import React, { Component } from 'react';
import { createStore } from 'redux';
import actions from './actionTypes';
import reducer from './reducer';
import Homepage from '../Homepage/Index';
import Bootstrap from 'bootstrap';

var store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div>
        <Homepage store={store}/>
      </div>
    );
  }
} 

export default App;