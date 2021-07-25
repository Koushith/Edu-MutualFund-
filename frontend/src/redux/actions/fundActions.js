import axios from 'axios';
import { FUND_LISTS_REQUEST, FUND_LISTS_SUCCESS, FUND_LISTS_FAIL } from '../constants/fundConstants';

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
