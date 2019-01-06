//import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, NEW_POST } from '../actions';
import { ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE } from '../actions';

const initialState = {
  items: [],
  status: null,
  item: {}
};

export default function (state = initialState, action) {
  const {type, result} = action;
  switch (type) {
  case ADD_TODO:
    return {
      ...state,
      status:null,
      items: result
    };
  case ADD_TODO_SUCCESS:
    return {
      ...state,
      status:'call made successfully',
      items: result
    };
  case ADD_TODO_FAILURE:
    return {
      ...state,
      status:' call failed'
    };
  // case NEW_POST:
  //   return {
  //     ...state,
  //     item: action.result
  //   };
  default:
    return state;
  }
}
