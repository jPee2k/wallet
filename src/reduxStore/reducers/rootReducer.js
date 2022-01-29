import { SHOW_SPINNER, HIDE_SPINNER } from '../actionTypes.js';
import initState from '../initialState.js';

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return { isLoading: action.payload };
    case HIDE_SPINNER:
      return { isLoading: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
