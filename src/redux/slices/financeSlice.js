/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  categories: [],
  exchangeRates: [],
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    addCategories: (state, { payload: categories }) => {
      state.categories = categories;
    },
    addTransaction: (state, { payload: transaction }) => {
      state.items.unshift({ status: 'new', ...transaction });
    },
    editTransaction: (state, { payload: transaction }) => {
      state.items = state.items.map((item) => {
        if (item.id === transaction.id) {
          return transaction;
        }
        return item;
      });
    },
    removeTransaction: (state, { payload: transaction }) => {
      state.items = state.items.filter((item) => item.id !== transaction);
    },
    addData: (state, { payload: transactions }) => {
      state.items = [...transactions].sort((a, b) => {
        const dateA = new Date(a.transactionDate);
        const dateB = new Date(b.transactionDate);
        return dateB - dateA;
      });
    },
    resetFinanceData: () => initialState,
    addExchangeRates: (state, { payload: rates }) => {
      state.exchangeRates = rates;
    },
  },
});

export const {
  addCategories,
  addTransaction,
  addData,
  resetFinanceData,
  editTransaction,
  removeTransaction,
  addExchangeRates,
} = financeSlice.actions;
export default financeSlice.reducer;
