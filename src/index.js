import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, browserHistory} from 'react-router-dom';
import Menu from './Menu/index';
import store from './Redux/store';
import App from './App/App';


render(
<Provider store={store}>
  <BrowserRouter history={browserHistory}>
    <div>
      <Route exact path="/" component={App} />
      <Route path ="/menu" component={Menu} />
    </div>
  </BrowserRouter>
</Provider>, document.getElementById('app'));
