/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  isModalRemoveTransactionOpen: false,
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
      state.transactionID = action.payload ? action.payload : null;
      state.isModalAddTransactionOpen = true;
    },
    closeTransactionModal: (state) => {
      state.transactionID = null;
      state.isModalAddTransactionOpen = false;
    },
    openLogoutModal: (state) => {
      state.isModalLogoutOpen = true;
    },
    closeLogoutModal: (state) => {
      state.isModalLogoutOpen = false;
    },
    openRemoveTransactionModal: (state, action) => {
      state.transactionID = action.payload ? action.payload : null;
      state.isModalRemoveTransactionOpen = true;
    },
    closeRemoveTransactionModal: (state) => {
      state.transactionID = null;
      state.isModalRemoveTransactionOpen = false;
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
  openRemoveTransactionModal,
  closeRemoveTransactionModal,
} = globalSlice.actions;
export default globalSlice.reducer;
