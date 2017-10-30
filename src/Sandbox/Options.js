import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

var Options = () => {
  return (
    <div className="model-container">
      Options
        <div className="model"> <Link to ="/housing">Housing Model</Link> </div>
        <div className="model"> <Link to ="/chat">Chat Model</Link> </div>
        <div className="model"> <Link to ="/mushrooms">Mushroom Model</Link> </div>
        <div className="model"> <Link to ="/MNIST">MNIST Model</Link> </div>
        <div className="model"> <Link to ="/voicerec">Voice Recording Model</Link> </div>
      <h1><Link to ="/settings">Profile settings</Link></h1>
        <div className='wrapper'>
          <h1>
            Oh, hey there
          </h1>
          <h2>
            Go ahead and click on the blocks to atch 'em pop
          </h2>
          <input id='1' type='checkbox'></input>
          <label>
            <div>
              <div className='circle'></div>
              <span>Click me</span>
            </div>
          </label>
        </div>
    </div>
  );
}

export default Options;
