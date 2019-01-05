// export const FETCH_POSTS = 'FETCH_POSTS';
// export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
// export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
// export const NEW_POST = 'NEW_POST';

//action types
//export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const todoAction = (item) => {
  return { type: ADD_TODO, result: item };
};
