import React from 'react';
import Login from './Login/Login';
var logoSrc = 'http://cleartheairchicago.com/files/2014/06/logo-placeholder.jpg';

var Homepage = () => {
  return (
    <div>
      <h1>Welcome</h1>
        <img id="logo" src={logoSrc}/>
        <Login />
        <div><a href="#">LOGIN</a></div>
    </div>
    );
}

export default Homepage;