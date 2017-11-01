import React from 'react';
import Loginform from './Loginform';
import Loader from './Loader';
var conditionalRender = (authState, props) => {
  if (authState) {
    return <Loader/>
  } else {
    return <Loginform 
      signIn={props.signIn} />
  }
}

var Login = (props) => {
  return (
  <div id="auth-popup" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" style={{display: "none"}} aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <Loginform 
            signIn={props.signIn} 
          />
        </div>
      </div>
    </div>
  </div>

  );
}

export default Login;
