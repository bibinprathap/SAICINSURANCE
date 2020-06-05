import * as actionTypes from './constants';

const initialState = {
  loading: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default homeReducer;
