import React from 'react';
import { Link } from 'react-router-dom';

var Dashboard = (props) => {
  return(
    <Link to ={props.link}>
      <div className='wrapper'>
        <input type='checkbox'></input>
        <label>
          <div className='circle'>
            <i className="fa fa-home fa-5x" aria-hidden="true"></i>
          </div>
          {props.text}
        </label>
      </div>
    </Link>
  );
}

export default Dashboard;