import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import prepareHeaders from './prepareHeaders.js';
import prepareData from '../utils/data.js';

const ALLOWED_FIELDS = ['transactionDate', 'type', 'categoryId', 'comment', 'amount'];

export const transactionsApi = createApi({
  reducerPath: 'transactionsAPI',
  // tagTypes: ['transactions'],
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
      // providesTags: ['transactions'],
    }),
    createTransaction: build.mutation({
      query: (body) => ({
        method: 'POST',
        url: '/api/transactions/',
        body: prepareData(body, ALLOWED_FIELDS),
      }),
      // invalidatesTags: ['transactions'],
    }),
    updateTransaction: build.mutation({
      query: ({ transactionID, body }) => ({
        method: 'PATCH',
        url: `/api/transactions/${transactionID}`,
        body: prepareData(body, ALLOWED_FIELDS),
      }),
    }),
    removeTransaction: build.mutation({
      query: (transactionID) => ({
        method: 'DELETE',
        url: `/api/transactions/${transactionID}`,
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
