import React from 'react';
import { Link } from 'react-router-dom';
import '../../Drawer/drawerStyles.css';
import Logout from '../../../Logout/index.js';
 
const Drawer = ({modelName}) => {
  return (
    <nav className="navbar navbar-dark drawer">
      <a className="navbar-brand name" href="#">{modelName}</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#siteNav"
        aria-controls="siteNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="siteNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to ="/Wiki">Learn More</Link>
            <Link className="nav-link" to ="/settings">Profile Settings</Link>
            <Logout />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Drawer;