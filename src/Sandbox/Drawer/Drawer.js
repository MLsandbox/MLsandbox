import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../Logout/index.js';
import Description from './Description.js';
import './drawerStyles.css'
 
const Drawer = ({modelName, description}) => {
  return (
    <nav className="navbar navbar-dark drawer">
      <Description description={description}/>
      <a className="navbar-brand name" data-toggle="modal" data-target="#explanation-popup">{modelName}</a>
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
            <Link className="nav-link" to ="/sandbox">BACK</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="modal" data-target="#explanation-popup" >EXPLANATION</a>
          </li>
          <li className="nav-item">
            <Logout className="nav-link"/> 
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Drawer;