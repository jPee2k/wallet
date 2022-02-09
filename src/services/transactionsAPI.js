import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import prepareHeaders from './prepareHeaders.js';
import prepareData from '../utils/data.js';

const ALLOWED_FIELDS = ['transactionDate', 'type', 'categoryId', 'comment', 'amount'];

export const transactionsApi = createApi({
  reducerPath: 'transactionsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wallet.goit.ua',
    prepareHeaders,
  }),
  endpoints: (build) => ({
    getTransactions: build.query({
      query: () => ({
        method: 'GET',
        url: '/api/transactions/',
      }),
    }),
    createTransaction: build.mutation({
      query: (body) => ({
        method: 'POST',
        url: '/api/transactions/',
        body: prepareData(body, ALLOWED_FIELDS),
      }),
    }),
    updateTransaction: build.mutation({
      query: (transactionId, body) => ({
        method: 'PATCH',
        url: `/api/transactions/${transactionId}`,
        body: prepareData(body, ALLOWED_FIELDS),
      }),
    }),
    removeTransaction: build.mutation({
      query: (transactionId) => ({
        method: 'DELETE',
        url: `/api/transactions/${transactionId}`,
      }),
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useCreateTransactionMutation,
  useUpdateTransactionMutation,
  useRemoveTransactionMutation,
} = transactionsApi;
