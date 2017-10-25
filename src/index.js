import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import Sandbox from './Sandbox/index';
import store from './Redux/store';
import App from './App/App';
import Login from './Loginpage/index';
import Authroute from './ClientHelpers/AuthRouting/checkAuth';

console.log('jwttoken',localStorage.jwtToken);

render(
<Provider store={store}>
  <BrowserRouter history={browserHistory}>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Authroute path ="/sandbox" component={Sandbox} />
    </div>
  </BrowserRouter>
</Provider>, document.getElementById('app'));