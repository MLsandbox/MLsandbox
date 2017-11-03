import React, {Component} from 'react';
import { connect } from 'react-redux'; 

class Pwchangeform extends Component {
  constructor(props) {
    super(props);
    this.renderErrs = this.renderErrs.bind(this);
    this.renderResponse = this.renderResponse.bind(this);
  }
  renderErrs () {
    var errs = [];
    var pwLen = this.props.errs.pwLen;
    var pwMatch = this.props.errs.pwMatch;
    if (pwLen) {
      errs.push(
        <div key="chngerr1" className="alert alert-danger signup-err">
          <strong>*REQUIRE </strong>new password needs to be at least 6 characters
        </div>);
    }
    if (pwMatch) {
      errs.push(
        <div key="chngerr3" className="alert alert-danger signup-err">
          <strong>*REQUIRE </strong>make sure new passwords match
        </div>);
    }
    return errs;
  }

  renderResponse () {
    var state = this.props.changePwResponse;
    if ('valid' === state) {
      return (
        <div className="alert alert-success">
          <strong>*SUCCESS! </strong>your password has been changed
        </div>
      );
    }
    if ('invalid' === state) {
      return (
        <div className="alert alert-danger">
          <strong>*ERROR! </strong>incorrect password
        </div>
      );
    }
  }
  render() {
    return (
      <fieldset className="user-settings-form">
        <legend className="user-settings-legend">Change Password:</legend>
        {this.renderErrs()}
        {this.renderResponse()}
        <div className="form-input">
          Old Password: <div><input id="old-pw-input" className="change-pw-input" type="password"/></div>
        </div>
        <div className="form-input">
          New Password: <div><input id="new-pw-input" className="change-pw-input" type="password"/></div>
        </div>
        <div className="form-input">
          Confirm Password: <div><input id="confirm-pw-input" className="change-pw-input" type="password"/></div>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.props.handleClick}>Submit</button>
      </fieldset>
    )
  }
}

export default connect((store) => {
  return {
    errs: store.signup.signupErrs,
    changePwResponse: store.profState.profileSettings.pwChangeReq,
  }
})(Pwchangeform);
