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
    addUserData: (state, action) => {
      const { user, token } = action.payload;
      state.isAuth = true;
      state.token = token;
      state.user = user;
      state.error = null;
    },
    addError: (state, action) => {
      state.isAuth = false;
      state.error = action.payload;
    },
    resetUserData: () => initialState,
    updateUserBalance: (state, action) => {
      if (!state.error && state.user) {
        state.user.balance = action.payload;
      }
    },
  },
});

export const { addUserData, addError, resetUserData, updateUserBalance } = sessionSlice.actions;
export default sessionSlice.reducer;
