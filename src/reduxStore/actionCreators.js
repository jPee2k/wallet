import { HIDE_SPINNER, SHOW_SPINNER } from './actionTypes.js';

export const actionCreators = {
  showSpinner: () => ({
    type: SHOW_SPINNER,
    payload: true,
  }),

  hideSpinner: () => ({
    type: HIDE_SPINNER,
    payload: false,
  }),
};
