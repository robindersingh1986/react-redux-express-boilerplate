import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILURE } from '../actions';

const initialState = {
  items: [],
  status: null,
  item: {}
};

export default function (state = initialState, action) {
  const {type, result} = action;
  switch (type) {
  case GET_DATA:
    return {
      ...state,
      status:null,
    };
  case GET_DATA_SUCCESS:
    return {
      ...state,
      status:'get call made successfully',
      items: result
    };
  case GET_DATA_FAILURE:
    return {
      ...state,
      status:'get call failed'
    };
  default:
    return state;
  }
}
