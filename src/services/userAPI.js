import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import prepareHeaders from './prepareHeaders';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wallet.goit.ua',
    prepareHeaders,
  }),
  endpoints: (build) => ({
    getUser: build.query({
      query: (id = 'current') => `/api/users/${id}`,
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetUserQuery } = userAPI;
