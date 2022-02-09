/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  error: null,
  token: null,
  user: null,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    addUserData: (state, actions) => {
      const { user, token } = actions.payload;
      state.isAuth = true;
      state.token = token;
      state.user = user;
      state.error = null;
    },
    addError: (state, actions) => {
      state.isAuth = false;
      state.error = actions.payload;
    },
    resetUserData: () => initialState,
    updateUserBalance: (state, actions) => {
      if (!state.error && state.user) {
        state.user.balance = actions.payload;
      }
    },
  },
});

export const { addUserData, addError, resetUserData, updateUserBalance } = sessionSlice.actions;
export default sessionSlice.reducer;
