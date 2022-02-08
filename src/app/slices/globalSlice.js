/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isModalAddTransactionOpen: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    showSpinner: (state) => {
      state.isLoading = true;
    },
    hideSpinner: (state) => {
      state.isLoading = false;
    },
    openModal: (state) => {
      state.isModalAddTransactionOpen = true;
    },
    closeModal: (state) => {
      state.isModalAddTransactionOpen = false;
    },
  },
});

export const { showSpinner, hideSpinner, openModal, closeModal } = globalSlice.actions;
export default globalSlice.reducer;
