import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
[]

var Options = () => {
  return (
    <div className="model-container">
      Options
        <div className="model"> <Link to ="/chat">Chat Model</Link> </div>
        <div className="model"> <Link to ="/mushrooms">Mushroom Model</Link> </div>
        <div className="model"> <Link to ="/MNIST">MNIST Model</Link> </div>
        <div className="model"> <Link to ="/voicerec">Voice Recording Model</Link> </div>
      <h1><Link to ="/settings">Profile settings</Link></h1>
      <div className='wrapper'>
        <input id='1' type='checkbox'></input>
        <label>
            <div className='circle'></div>
            <Link to ="/housing">Housing Model</Link>
        </label>
      </div>
    </div>
  );
}

export default Options;

//<Link to ="/housing">Housing Model</Link>