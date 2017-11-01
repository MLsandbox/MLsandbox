import React from 'react';
import { Link } from 'react-router-dom';

var Dashboard = (props) => {
  return(
    <Link to ={props.link}>
      <div className='wrapper'>
        <input type='checkbox'></input>
        <label>
          <div className='circle'></div>
          {props.text}
        </label>
      </div>
    </Link>
  );
}

export default Dashboard;