import { HIDE_SPINNER, SHOW_SPINNER, ADD_USER_TOKEN, ADD_USER_DATA, ADD_ERROR } from './actionTypes.js';

export const actionCreators = {
  showSpinner: () => ({
    type: SHOW_SPINNER,
    payload: true,
  }),

  hideSpinner: () => ({
    type: HIDE_SPINNER,
    payload: false,
  }),

  addUserToken: (token) => ({
    type: ADD_USER_TOKEN,
    payload: token,
  }),

  addUserData: (data) => ({
    type: ADD_USER_DATA,
    payload: data,
  }),

  addError: (error) => ({
    type: ADD_ERROR,
    payload: error,
  }),
};
