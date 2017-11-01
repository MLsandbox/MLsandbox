import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../Logout/index.js';
import './drawerStyles.css'
 
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
            <Link className="nav-link" to ="/sandbox">BACK</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" data-toggle="modal" data-target="#explanation-popup" >EXPLANATION</a>
            <div id="explanation-popup" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" style={{display: "none"}} aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    HIIII
                  </div>
                </div>
              </div>
            </div>
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