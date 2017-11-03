import React from 'react';

var Pwchangeform = (props) => {
  return (
    <fieldset className="user-settings-form">
      <legend className="user-settings-legend">Change Password:</legend>
      Old Password: <input type="text"/><br/>
      New Password: <input type="text"/><br/>
      Confirm Password: <input type="text"/>
    </fieldset>
  )
}

export default Pwchangeform;