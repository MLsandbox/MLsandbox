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
          <strong>*REQUIRE </strong>PASSWORD NEEDS TO BE AT LEAST 6 CHARACTERS
        </div>);
    }
    if (pwMatch) {
      errs.push(
        <div key="chngerr3" className="alert alert-danger signup-err">
          <strong>*REQUIRE </strong>PASSWORDS DON'T MATCH
        </div>);
    }
    return errs;
  }
  render() {
    return (
      <fieldset className="user-settings-form">
        <legend className="user-settings-legend">Change Password:</legend>
        {this.renderErrs()}
        <div className="form-input old-pw-input">
          Old Password: <input type="text"/>
        </div>
        <div className="form-input new-pw-input">
          New Password: <input type="text"/>
        </div>
        <div className="form-input confirm-pw-input">
          Confirm Password: <input type="text"/>
        </div>
        <button type="button" className="btn btn-primary" onClick={props.handleClick}>Submit</button>
      </fieldset>
    )
  }
}

export default connect((store) => {
  return {
    errs: store.signup.signupErrs,
  }
})(Pwchangeform);