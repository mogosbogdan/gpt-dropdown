import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dropdown from './components/Dropdown';

ReactDOM.render(
  <Provider store={store}>
    <Dropdown />
  </Provider>,
  document.getElementById('root')
);
