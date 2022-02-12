/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  transactionID: null,
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
    openTransactionModal: (state, action) => {
      state.isModalAddTransactionOpen = true;
      state.transactionID = action.payload ? action.payload : null;
    },
    closeTransactionModal: (state) => {
      state.isModalAddTransactionOpen = false;
    },
    openLogoutModal: (state) => {
      state.isModalLogoutOpen = true;
    },
    closeLogoutModal: (state) => {
      state.isModalLogoutOpen = false;
    },
  },
});

export const {
  showSpinner,
  hideSpinner,
  openTransactionModal,
  closeTransactionModal,
  openLogoutModal,
  closeLogoutModal,
} = globalSlice.actions;
export default globalSlice.reducer;
