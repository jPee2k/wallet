import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wallet.goit.ua',
  }),
  endpoints: (build) => ({
    getUser: build.query({
      query: (id = 'current') => `/api/users/${id}`,
    }),
  }),
});

export const { useGetUserQuery } = userAPI;
