import axios from 'axios';
import {
  FUND_LISTS_REQUEST,
  FUND_LISTS_SUCCESS,
  FUND_LISTS_FAIL,
  FUND_DETAILS_REQUEST,
  FUND_DETAILS_SUCCESS,
  FUND_DETAILS_FAIL,
  FUND_SEARCH_REQUEST,
  FUND_SEARCH_SUCCESS,
  FUND_SEARCH_FAIL,
} from '../constants/fundConstants';
import funds from '../../components/data/mockServer';
/**
 *  get all funds avaliable and set it to local storage for quick retrival
 */

export const getAllFunds = () => async (dispatch) => {
  try {
    dispatch({
      type: FUND_LISTS_REQUEST,
    });

    const {
      data: { funds },
    } = await axios.get('/api/funds');

    dispatch({
      type: FUND_LISTS_SUCCESS,
      payload: funds,
    });

    localStorage.setItem('funds', JSON.stringify(funds));
  } catch (error) {
    dispatch({
      type: FUND_LISTS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

/**
 *  get a single fund detail based on fund ID
 */
export const fundDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: FUND_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/funds/${id}`);
    console.log('data from action', data);
    dispatch({
      type: FUND_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FUND_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const searchAction = (search) => async (dispatch) => {
  try {
    dispatch({
      type: FUND_SEARCH_REQUEST,
    });

    const filtered = funds.filter((term) => term.name.toLowerCase().includes(search.toLowerCase()));

    dispatch({
      type: FUND_SEARCH_SUCCESS,
      payload: filtered,
    });
  } catch (error) {
    dispatch({
      type: FUND_SEARCH_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
