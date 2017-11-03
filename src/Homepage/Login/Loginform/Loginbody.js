import React from 'react'; 

var Loginbody = (props) => {
  return (
    <form id="login-fields">
      <fieldset className="clearfix">
        <p className="login_p"><span className="fa fa-user"></span>
          <input type="text" placeholder="Username" 
            id="formControlsEmail"
            required/></p>
        <p className="login_p"><span className="fa fa-lock"></span><input 
          id="formControlsPassword"
          type="password" 
          placeholder="Password" 
          required/></p> 
        <p className="login_p"><input onClick={props.signIn} type="button" defaultValue="Log In"/></p>
      </fieldset>
    </form>
  );
};

export default Loginbody;