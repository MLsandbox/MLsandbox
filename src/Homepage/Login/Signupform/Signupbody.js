import React from 'react';

var Signupbody = (props) => {
  return (
    <form id="login-fields">
      <fieldset className="clearfix">
        <p className="login_p"><span className="fa fa-user"></span>
          <input type="text" placeholder="Username" 
          id="signupEmail"
          required/></p>
        <p className="login_p"><span className="fa fa-lock"></span><input 
          id="signupPassword"
          type="password" 
          placeholder="Password" 
          required/></p> 
        <p className="login_p"><span className="fa fa-lock"></span><input 
          id="confirmPassword"
          type="password" 
          placeholder="Confirm Password" 
          required/></p> 
        <p className="login_p"><input onClick={props.signUp} type="button" defaultValue="Sign Up"/></p>  
      </fieldset>
    </form>
  );
}

export default Signupbody;