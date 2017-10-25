import React from 'react';
import { Link } from 'react-router-dom';
var placeholder = "http://3.bp.blogspot.com/-JfemdXlQ-Ns/UzHKRp3KoeI/AAAAAAABAmY/7N2ghKTYI9o/s3200/Screen+Shot+2014-03-25+at+7.21.15+PM.png";
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
      <div>
        <img src={placeholder} height="300" width="300"/>
      </div>
    </div>
  );
}

export default Options;