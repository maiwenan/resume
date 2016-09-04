import {
  createStore
} from 'redux';
import initState from '../init-state';
import reducer from '../reducers/resume';

const store = createStore(reducer, initState || {});

export default store;
