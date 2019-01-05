import { combineReducers } from 'redux';
import postReducer from '.';

const rootReducer = combineReducers({
  posts: postReducer
});

export default rootReducer;
