import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import prepareHeaders from './prepareHeaders';

export const transactionCategoryApi = createApi({
  reducerPath: 'transactionCategoryAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wallet.goit.ua',
    prepareHeaders,
  }),
  endpoints: (build) => ({
    getTransactionCategories: build.query({
      query: () => '/api/transaction-categories',
    }),
  }),
});

export const { useGetTransactionCategoriesQuery } = transactionCategoryApi;
