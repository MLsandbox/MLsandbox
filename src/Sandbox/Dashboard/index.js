import React from 'react';
import { Link } from 'react-router-dom';

var Dashboard = (props) => {
  return(
    <Link to ={props.link}>
      <div className='wrapper'>
        <input type='checkbox'></input>
        <label>
          <div className='circle'>
            <i className={props.icon} aria-hidden="true"></i>
          </div>
          <div className='example-name'>
            {props.text}
          </div>
        </label>
      </div>
    </Link>
  );
}

export default Dashboard;