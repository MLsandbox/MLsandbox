import React from 'react';

var Pwchangeform = (props) => {
  return (
    <fieldset className="user-settings-form">
      <legend className="user-settings-legend">Delete Account:</legend>
      <div className="form-input del-username-input">Username: <input type="text"/></div>
      <div className="form-input del-password-input">Password: 
        <input type="text"/>
      </div>
      <div className="form-input del-confirm-input">Confirm Password: 
        <input type="text"/>
      </div>
      <button type="button" className="btn btn-primary" onClick={props.handleClick}>Confirm</button>
    </fieldset>
  )
}

export default Pwchangeform;