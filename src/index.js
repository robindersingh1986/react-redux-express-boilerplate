import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';
import store from './storeSaga';
import App from './containers/App';

/* const initialState = {};
const history = createHistory({
  basename: '',
  forceRefresh: false
}); */

//const store = makeStore(initialState, history);

const render = () => {
  ReactDOM.render(
    <AppContainer warnings={ false }>
      <Provider store={ store }>
        <App />
        {/* <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter> */}
      </Provider>
    </AppContainer>,
    document.getElementById('main')
  );
};

if(module.hot){
  module.hot.accept('./containers/App', () => {
    render();
  });
}
render();
