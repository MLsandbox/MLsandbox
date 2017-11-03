import React from 'react';

var Pwchangeform = (props) => {
  return (
    <fieldset className="user-settings-form">
      <legend className="user-settings-legend">Delete Account:</legend>
      <div className="del-form-input">Username: <input className="del-acc-input" 
        id="del-username-input" type="text"/></div>
      <div className="del-form-input">Password: 
        <input id="del-password-input" className="del-acc-input" type="text"/>
      </div>
      <div className="del-form-input">Confirm Password: 
        <input id="del-confirm-input" className="del-acc-input" type="text"/>
      </div>
      <button type="button" className="btn btn-primary" onClick={props.handleClick}>Confirm</button>
    </fieldset>
  )
}

export default Pwchangeform;