import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILURE } from '../actions';

const initialState = {
  items: [],
  status: null,
  error: null,
};

export default function (state = initialState, action) {
  const {type, result, error} = action;
  switch (type) {
  case GET_DATA:
    return  Object.assign({}, ...state);
  case GET_DATA_SUCCESS:
    return  Object.assign({}, ...state, { status:'get call made successfully', items: result });
  case GET_DATA_FAILURE:
  return  Object.assign({}, ...state, { status:'get call failed', error });
  default:
    return state;
  }
}
