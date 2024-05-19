import {
    FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
  } from './homeTypes';
  
  const initialState = {
    loading: false,
    result: [],
    error: '',
  };
  
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          result: action.payload,
          error: '',
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          result: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default homeReducer;
  