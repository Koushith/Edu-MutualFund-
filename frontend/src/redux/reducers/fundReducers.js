import { FUND_LISTS_REQUEST, FUND_LISTS_SUCCESS, FUND_LISTS_FAIL } from '../constants/fundConstants';

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
