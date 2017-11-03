import React, {Component} from 'react';
import { connect } from 'react-redux'; 

class Pwchangeform extends Component {
  constructor(props) {
    super(props);
    this.renderErrs = this.renderErrs.bind(this);
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
  render() {
    return (
      <fieldset className="user-settings-form">
        <legend className="user-settings-legend">Change Password:</legend>
        {this.renderErrs()}
        <div className="form-input">
          Old Password: <input id="old-pw-input" type="password"/>
        </div>
        <div className="form-input">
          New Password: <input id="new-pw-input" type="password"/>
        </div>
        <div className="form-input">
          Confirm Password: <input id="confirm-pw-input" type="password"/>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.props.handleClick}>Submit</button>
      </fieldset>
    )
  }
}

export default connect((store) => {
  return {
    errs: store.signup.signupErrs,
  }
})(Pwchangeform);