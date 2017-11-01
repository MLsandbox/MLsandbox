import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const checkAuth = () => {
  const token = localStorage.jwtToken;
  if (!token) {
    return false;
  }
  return true;
}

const Authroute = (props) => {
  var Component = props.component;
  return (
    <Route path={props.path} render={ props => {
      return checkAuth() ? (
        <Component storage={props} />
      ) : (
        <Redirect to={{ pathname: '/'}}/>
      )
    }}/>
  )
}

export default Authroute;