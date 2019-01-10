import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider, ReactReduxContext } from 'react-redux';

// import createHistory from 'history/createBrowserHistory';
import store from './storeSaga';
import { App } from './App.js';

/* const initialState = {};
const history = createHistory({
  basename: '',
  forceRefresh: false
}); */

//const store = makeStore(initialState, history);


// ReactDOM.render(
//   <AppContainer warnings={ false }>
//     <Provider store={ store } context={ ReactReduxContext }>
//       <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
//         <> { /* your usual react-router v4 routing */ }
//           <Switch>
//             <Route exact path="/" render={() => (  <App history={history} context={ReactReduxContext} /> )} />
//             <Route render={() => (<div>Miss</div>)} />
//           </Switch>
//         </>
//       </ConnectedRouter>
//     </Provider>
//   </AppContainer>,
//   document.getElementById('main')
// )

const render = () => {
  ReactDOM.render(
    <AppContainer warnings={ false }>
      <Provider store={ store } context={ ReactReduxContext }>
        <App history={ history } context={ ReactReduxContext }/>
      </Provider>
    </AppContainer>,
    document.getElementById('main')
  );
};

/* 
const render = () => {
  ReactDOM.render(
    <AppContainer warnings={ false }>
      <Provider store={ store }>
        <App />
        </Provider>
        </AppContainer>,
        document.getElementById('main')
      );
    }; */
if(module.hot){
  //module.hot.accept('./containers/Dashboard', () => {
  module.hot.accept('./reducers', () => {
    render();
  });
}
render();
