import React from 'react';

var Login = (props) => {
  return (
    <div className="col-sm-6">
      <form className="auth-page-ele">
        <fieldset className="auth-form-container">
          <legend className="legend">Login</legend>
          <div className="loginpage-input">
            <input id="login-form-email" placeholder="Username" required />
            <span><i className="fa fa-envelope-o"></i></span>
          </div>
          <div className="loginpage-input">
            <input id="login-form-password" type="password" placeholder="Password" required />
            <span><i className="fa fa-lock"></i></span>
          </div>
          <button onClick={props.loginHandler} type="button" className="submit"><i className="fa fa-long-arrow-right"></i></button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;