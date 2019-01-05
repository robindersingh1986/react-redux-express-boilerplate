import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';

//create saga middleware
const sagaMiddleware = createSagaMiddleware();
  import {helloSaga} from './sagas'

// export default function appStore(initialState= {}, history) {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
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
    applyMiddleware(sagaMiddleware),
    //composeEnhancers(...enhancers),
  );
  sagaMiddleware.run(helloSaga)
  // debugger;
  // store.runSagaTask = () => {
  //   store.sagaTask = sagaMiddleware.run(helloSaga)
  // }
  // store.runSagaTask()
export default store;
