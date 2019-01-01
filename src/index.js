import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'hostory/createBrowserHistory';

Import App from './containers/App';
const history = createHistory({
  basename: '',
  forceRefresh: false
});
const store 
