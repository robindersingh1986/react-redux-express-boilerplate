import { createStore, applyMiddleware, compose } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import { rootSaga } from './sagas';

//create saga middleware
const sagaMiddleware = createSagaMiddleware();


// export default function appStore(initialState= {}, history) {
const middlewares = [
  sagaMiddleware,
  // routerMiddleware(history)
];

const enhancers = [
  applyMiddleware(...middlewares),
];

const composeEnhancers = 
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      features: {
        persist: false
      },
    })
    : compose;

const store = createStore(
  rootReducer,
  //initialState,
  composeEnhancers(...enhancers),
);
sagaMiddleware.run( rootSaga );
// debugger;
// store.runSagaTask = () => {
//   store.sagaTask = sagaMiddleware.run( rootSaga )
// }
// store.runSagaTask()
export default store;
