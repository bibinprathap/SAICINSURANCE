import * as actionTypes from './constants';

export const fetchStart = bool => {
  return {
    type: actionTypes.LOGIN_START,
  };
};

export const fetchSuccess = data => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
  };
};

export const fetchError = error => {
  return {
    type: actionTypes.LOGIN_FAILED,
  };
};
