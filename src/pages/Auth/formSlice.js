/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  session: {
    isAuth: false,
  },
  token: null,
  user: null,
  error: null,
};

export const formSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUserData: (state, actions) => {
      const { user, token } = actions.payload;
      state.session.isAuth = true;
      state.token = token;
      state.user = user;
      state.error = null;
    },
    addError: (state, actions) => {
      state.session.isAuth = false;
      state.error = actions.payload;
    },
    resetUserData: () => initialState,
  },
});

export const { addUserData, addError, resetUserData } = formSlice.actions;
export default formSlice.reducer;
