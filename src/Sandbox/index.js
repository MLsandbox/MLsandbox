import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import Options from './Options';
import Logout from '../Logout/index';

class Sandbox extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return(
      <div>
        <h1><Link to ="/Wiki">LEARN/INFORMATION</Link></h1>
        <h1><Link to ="/settings">Profile settings</Link></h1>
        <Logout />
        <Options />
      </div>
    )
  }
}

export default Sandbox;