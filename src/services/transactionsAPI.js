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
    createTransaction: build.mutation({
      query: (body) => ({
        method: 'POST',
        url: '/api/transactions/',
        body: prepareData(body, ALLOWED_FIELDS),
      }),
    }),
  }),
});

export const { useCreateTransactionMutation } = transactionsApi;
