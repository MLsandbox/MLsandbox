import React from 'react';

var Pwchangeform = (props) => {
  return (
    <fieldset className="user-settings-form">
      <legend className="user-settings-legend">Delete Account:</legend>
      Username: <input type="text"/><br/>
      Password: <input type="text"/><br/>
      Confirm Delete: <input type="text"/>
    </fieldset>
  )
}

export default Pwchangeform;