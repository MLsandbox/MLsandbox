import React, { Component } from 'react';
import Styles from './Loginpage.css';

class Loginpage extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>   
        <div className="container">
          <div className="row">
            <div id="signin-form" className="col-sm-6">
              SIGN IN
            </div>
            <div id="signup-form" className="col-sm-6">
              SIGN UP
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Loginpage;