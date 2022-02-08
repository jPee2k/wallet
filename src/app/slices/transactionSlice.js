/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addTransactionData: (state, actions) => {
      state.transactions.push(actions.payload);
    },
  },
});

export const { addTransactionData } = transactionSlice.actions;
export default transactionSlice.reducer;
