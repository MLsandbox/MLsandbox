import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Dashboard from './Dashboard/index';

var modelProps = {
  'Chatbot': ['/chat', 'fa fa-comments fa-5x'],
  'Poisonous or Edible': ['/mushrooms', 'fa fa-cutlery fa-5x'], 
  'Character Recognition': ['/MNIST', 'fa fa-pencil-square-o fa-5x'],
  'Voice Recognition': ['/voicerec', 'fa fa-volume-up fa-5x'], 
  'Seattle Housing Prices': ['/housing', 'fa fa-home fa-5x'],
};

var buildDashboard = () => {
  var dashboard = [];
  for (var key in modelProps) {
    dashboard.push(<Dashboard key={ key } text={ key } link={ modelProps[key][0] } icon={ modelProps[key][1] }/>);
  }
  return dashboard;
};

var Options = () => {
  return (
    <div className="model-container">
      { buildDashboard() }
    </div>
  );
};

export default Options;
