import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import Sandbox from './Sandbox/index';
import store from './Redux/store';
import Homepage from './Homepage/Index';
import Authroute from './ClientHelpers/AuthRouting/checkAuth';
import Housing from './Sandbox/MLmodels/Housing/Housing';
import Mushrooms from './Sandbox/MLmodels/Mushrooms/Mushrooms';
import Mnist from './Sandbox/MLmodels/Mnist/Mnist';
import Voicerec from './Sandbox/MLmodels/VoiceRecognition/VoiceRecognition';
import Chat from './Sandbox/MLmodels/Chatbot/Chatbot';
import Wiki from './Sandbox/Information/Wiki';
import Settings from './Settings/index';

render(
<Provider store={store}>
  <BrowserRouter history={browserHistory}>
    <div className="routes">
      <Route exact path="/" component={Homepage} />
      <Route exact path="/housing" component={Housing} />
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/mushrooms" component={Mushrooms} />
      <Route exact path="/MNIST" component={Mnist} />
      <Route exact path="/voicerec" component={Voicerec} />
      <Route exact path="/Wiki" component={Wiki} />
      <Route exact path="/settings" component={Settings} />
      <Authroute exact path ="/sandbox" component={Sandbox} />
    </div>
  </BrowserRouter>
</Provider>, document.getElementById('app'));