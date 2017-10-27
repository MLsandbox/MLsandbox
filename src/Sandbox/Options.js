import React from 'react';
import { Link } from 'react-router-dom';

var Options = () => {
  return (
    <div>
      Options
      <ul>
        <li> <Link to ="/housing">Housing Model</Link> </li>
        <li> <Link to ="/chat">Chat Model</Link> </li>
        <li> <Link to ="/mushrooms">Mushroom Model</Link> </li>
        <li> <Link to ="/MNIST">MNIST Model</Link> </li>
        <li> <Link to ="/voicerec">Voice Recording Model</Link> </li>
      </ul>

      <h1>Placeholder SandBox</h1>
    </div>
  );
}

export default Options;
