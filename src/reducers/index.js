import { combineReducers } from 'redux';
import postReducer from './todo';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
  router: connectRouter(history),
  posts: postReducer
});
