import React, { Component } from 'react';
import Styles from './Loginpage.css';

class Loginpage extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="login-body">   
        <div className="container">
          <form class="login-page">
            <fieldset>
              <legend class="legend">Login</legend>
              <div class="loginpage-input">
                <input type="email" placeholder="Email" required />
                <span><i class="fa fa-envelope-o"></i></span>
              </div>
              <div class="loginpage-input">
                <input type="password" placeholder="Password" required />
                <span><i class="fa fa-lock"></i></span>
              </div>
              <button type="submit" class="submit"><i class="fa fa-long-arrow-right"></i></button>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default Loginpage;