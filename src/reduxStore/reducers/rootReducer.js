import { SHOW_SPINNER, HIDE_SPINNER, ADD_USER_TOKEN, ADD_USER_DATA, ADD_ERROR } from '../actionTypes.js';
import initState from '../initialState.js';

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        global: {
          ...state.global,
          isLoading: action.payload,
        },
      };
    case HIDE_SPINNER:
      return {
        ...state,
        global: {
          ...state.global,
          isLoading: action.payload,
        },
      };
    case ADD_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
        session: {
          ...state.session,
          isAuth: true,
        },
      };
    case ADD_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case ADD_ERROR:
      return {
        ...state,
        session: {
          ...state.session,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
