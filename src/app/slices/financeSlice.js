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
    addCategories: (state, action) => {
      state.categories = action.payload;
    },
    addTransaction: (state, action) => {
      state.data.unshift({ status: 'new', ...action.payload });
    },
    editTransaction: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    removeTransaction: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    addData: (state, action) => {
      state.data = [...action.payload].sort((a, b) => {
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
  editTransaction,
  removeTransaction,
} = financeSlice.actions;
export default financeSlice.reducer;
