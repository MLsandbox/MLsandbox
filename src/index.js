import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import Sandbox from './Sandbox/index';
import store from './Redux/store';
import App from './App/App';
import Login from './Loginpage/index';
import Authroute from './ClientHelpers/AuthRouting/checkAuth';
import Housing from './Sandbox/MLmodels/Housing/Housing';
import Mushrooms from './Sandbox/MLmodels/Mushrooms/Mushrooms';
import Mnist from './Sandbox/MLmodels/Mnist';
import Voicerec from './Sandbox/MLmodels/Voicerec';
import Chat from './Sandbox/MLmodels/Chatbot/Chatbot';

render(
<Provider store={store}>
  <BrowserRouter history={browserHistory}>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/housing" component={Housing} />
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/mushrooms" component={Mushrooms} />
      <Route exact path="/MNIST" component={Mnist} />
      <Route exact path="/voicerec" component={Voicerec} />
      <Authroute exact path ="/sandbox" component={Sandbox} />
    </div>
  </BrowserRouter>
</Provider>, document.getElementById('app'));