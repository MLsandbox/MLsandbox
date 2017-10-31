import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Dashboard from './Dashboard/index';

var modelProps = {
  "Chat Model":"/chat", "Mushroom Model": "/mushrooms", 
  "MNIST Model":"/MNIST","Voice Recording Model":"/voicerec", 
  "Housing Model":"/housing"
};

var buildDashboard = () => {
  var dashboard = [];
  for(var key in modelProps) {
    dashboard.push(<Dashboard key={ key } text={ key } link={ modelProps[key] } />)
  }
  return dashboard;
}

var Options = () => {
  return (
    <div className="model-container">
      { buildDashboard() }
    </div>
  );
}

export default Options;

//<Link to ="/housing">Housing Model</Link>