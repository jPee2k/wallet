/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransactionData: (state, actions) => {
      state.push(actions.payload);
    },
  },
});

export const { addTransactionData } = transactionSlice.actions;
export default transactionSlice.reducer;
