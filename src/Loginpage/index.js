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
          <form className="login-page">
            <fieldset>
              <legend className="legend">Login</legend>
              <div className="loginpage-input">
                <input type="email" placeholder="Email" required />
                <span><i className="fa fa-envelope-o"></i></span>
              </div>
              <div className="loginpage-input">
                <input type="password" placeholder="Password" required />
                <span><i className="fa fa-lock"></i></span>
              </div>
              <button type="submit" className="submit"><i className="fa fa-long-arrow-right"></i></button>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default Loginpage;