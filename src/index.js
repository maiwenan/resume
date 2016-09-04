import React from 'react';
import ReactDOM from 'react-dom';
import {
  connect,
  Provider
} from 'react-redux';
import store from './store';
import Container from 'template';

function mapStateToProps (state) {
  return state;
}

const Wrapper = connect(mapStateToProps)(Container);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Wrapper />
    </Provider>,
    document.getElementById('resume-wrapper')
  );
}

render();
