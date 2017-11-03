import React, { Component } from 'react';

class Pwchangeform extends Component {
  constructor(props) {
    super(props);
  }
  render()  {
    return (
      <fieldset className="user-settings-form">
        <legend className="user-settings-legend">Delete Account:</legend>
        <div className="del-form-input">Username: <div><input className="del-acc-input" 
              id="del-username-input" type="text"/></div>
        </div>
        <div className="del-form-input">Password: 
          <div><input id="del-password-input" className="del-acc-input" type="password"/></div>
        </div>
        <div className="del-form-input">Confirm Password: 
          <div><input id="del-confirm-input" className="del-acc-input" type="password"/></div>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.props.handleClick}>Confirm</button>
      </fieldset>
    );
  }
}

export default Pwchangeform;
