/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  categories: [],
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    addCategories: (state, actions) => {
      state.categories = actions.payload;
    },
    addTransaction: (state, actions) => {
      state.data.unshift({ status: 'new', ...actions.payload });
    },
    addData: (state, actions) => {
      state.data = [...actions.payload].sort((a, b) => {
        const dateA = new Date(a.transactionDate);
        const dateB = new Date(b.transactionDate);
        return dateB - dateA;
      });
    },
    resetFinanceData: () => initialState,
  },
});

export const {
  addCategories,
  addTransaction,
  addData,
  resetFinanceData,
} = financeSlice.actions;
export default financeSlice.reducer;
