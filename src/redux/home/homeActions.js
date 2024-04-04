import axios from 'axios';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, } from './homeTypes';
// import dotenv from 'dotenv';
// dotenv.config();
import API_URL from '../../config/apiConfig';

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
  });
  
  export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
  });
  
  export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
  });

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios.get(`${API_URL}/home/content`)
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};