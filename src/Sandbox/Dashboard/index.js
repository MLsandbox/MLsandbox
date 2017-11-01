import React from 'react';
import { Link } from 'react-router-dom';

var Dashboard = (props) => {
  return(
    <div className='wrapper'>
      <input type='checkbox'></input>
      <label>
        <div className='circle'></div>
        <Link to ={props.link}>{props.text}</Link>
      </label>
    </div>
  );
}

export default Dashboard;