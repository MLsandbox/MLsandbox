import React from 'react';

var Pwchangeform = (props) => {
  return (
    <fieldset id="change-pw-form">
      <legend id="change-pw-legend">Change Password:</legend>
      Name: <input type="text"/><br/>
      Email: <input type="text"/><br/>
      Date of birth: <input type="text"/>
    </fieldset>
  )
}

export default Pwchangeform;