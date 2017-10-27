import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Options from './Options';

class Sandbox extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return(
      <div>
        <h1>Sandbox Component</h1>
        <h1><Link to ="/Wiki">LEARN/INFORMATION</Link></h1>
          <Options />
      </div>
    )
  }
}

var Sandboxcomp = connect((state) => {
  return { 
    authentication: state.auth.authentication.authorization,
  }
})(Sandbox);

export default Sandboxcomp;