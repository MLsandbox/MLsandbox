import { createStore, applyMiddleware } from 'redux';
import reducer from './Reducers/index';
import thunk from 'redux-thunk';

var middleWare = applyMiddleware(thunk);
var store = createStore(reducer, middleWare);
export default store;