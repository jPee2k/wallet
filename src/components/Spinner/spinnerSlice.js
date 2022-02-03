/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  global: {
    isLoading: false,
  },
};

export const spinnerSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showSpinner: (state) => {
      state.global.isLoading = true;
    },
    hideSpinner: (state) => {
      state.global.isLoading = false;
    },
  },
});

export const { showSpinner, hideSpinner } = spinnerSlice.actions;
export default spinnerSlice.reducer;
