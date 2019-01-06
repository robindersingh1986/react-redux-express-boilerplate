import { all, takeLatest, call, put } from 'redux-saga/effects';
//import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
function* watcherSaga() {
  yield takeLatest('ADD_TODO', workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchData() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => posts);

  // return axios({
  //   method: 'get',
  //   url: 'https://jsonplaceholder.typicode.com/posts'
  // });
}

// worker saga: makes the api call when watcher saga sees the action
export function* workerSaga() {
  try {
    const result = yield call(fetchData);
    // dispatch a success action to the store with the new result
    yield put({ type: 'ADD_TODO_SUCCESS', result });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: 'ADD_TODO_FAILURE', error });
  }
}

// // single entry point to start all Sagas at once
export function *rootSaga() {
  yield all([
    //takeLatest('ADD_TODO', workerSaga),
    watcherSaga(),
  ]);
}
