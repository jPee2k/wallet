/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import sortBy from 'lodash.sortby';

const initialState = {
  data: [],
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    addTransaction: (state, actions) => {
      state.data = sortBy([actions.payload, ...state.data], [
        ({ transactionDate }) => (new Date(transactionDate)),
      ]).reverse();
    },
    addData: (state, actions) => {
      state.data = sortBy([...actions.payload, ...state.data], [
        ({ transactionDate }) => (new Date(transactionDate)),
      ]).reverse();
    },
  },
});

export const { addTransaction, addData } = financeSlice.actions;
export default financeSlice.reducer;
