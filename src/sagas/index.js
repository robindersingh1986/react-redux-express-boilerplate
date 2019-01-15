import { all, takeLatest } from 'redux-saga/effects';
import * as action from '../actions';
//import userLoginSaga from './userLoginSaga';
import getDataSaga from './getDataSaga';
//import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
function* watcherSaga() {
  yield takeLatest(action.GET_DATA, getDataSaga);
  //yield takeLatest(action.GET_USER_LOGIN_DATA, userLoginSaga);
}


// // single entry point to start all Sagas at once
export function *rootSaga() {
  yield all([
    //takeLatest('GET_DATA', workerSaga),
    watcherSaga(),
  ]);
}
