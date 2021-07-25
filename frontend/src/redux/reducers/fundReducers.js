import {
  FUND_LISTS_REQUEST,
  FUND_LISTS_SUCCESS,
  FUND_LISTS_FAIL,
  FUND_DETAILS_REQUEST,
  FUND_DETAILS_SUCCESS,
  FUND_DETAILS_FAIL,
} from '../constants/fundConstants';

// lists all finds
export const fundListReducer = (state = [], action) => {
  switch (action.type) {
    case FUND_LISTS_REQUEST:
      return {
        loading: true,
      };
    case FUND_LISTS_SUCCESS:
      return {
        loading: false,
        funds: action.payload,
      };

    case FUND_LISTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// filter out based on id - details page

export const productDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case FUND_DETAILS_REQUEST:
      return { loading: true };
    case FUND_DETAILS_SUCCESS:
      return { loading: false, singleFund: action.payload };
    case FUND_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
