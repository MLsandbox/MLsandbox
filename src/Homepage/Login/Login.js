import React from 'react';
import Loginform from './Loginform';
import Loader from './Loader';
var conditionalRender = (authState, props) => {
  if (authState) {
    return <Loader/>
  } else {
    return <Loginform 
      signIn={props.signIn} 
      signUp={props.signUp}
      closePopup={props.closePopup}/>
  }
}

// <div className="modal-container">
// <modal show={props.popupState} onHide={props.closePopup}>
//   <div>
//     {conditionalRender(props.authenticating, props)}
//   </div>
// </modal>

var Login = (props) => {
  return (
  <div id="exampleModalLive" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" style={{display: "none"}} aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Woohoo, you're reading this text in a modal!</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Login;
