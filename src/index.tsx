import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dropdown from './components/Dropdown';
import Card from './components/Card';

ReactDOM.render(
  <Provider store={store}>
    <Dropdown />
    <Card />
  </Provider>,
  document.getElementById('root')
);
