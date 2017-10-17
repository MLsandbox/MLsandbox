import { createStore } from 'redux';
import reducer from './Reducers/index';

var store = createStore(reducer);

export default store;