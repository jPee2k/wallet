/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// import sortBy from 'lodash.sortby';

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
      state.data.unshift(actions.payload);
    },
    // TODO -> FIX state
    addData: (state, actions) => {
      // state.data = sortBy([...actions.payload, ...state.data], [
      //   ({ transactionDate }) => (new Date(transactionDate)),
      // ]).reverse();
      state.data = actions.payload;
    },
  },
});

export const {
  addCategories,
  addTransaction,
  addData,
} = financeSlice.actions;
export default financeSlice.reducer;
