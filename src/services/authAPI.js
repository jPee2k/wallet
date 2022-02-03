import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ALLOWED = ['username', 'email', 'password'];

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wallet.goit.ua',
  }),
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (body) => ({
        method: 'POST',
        url: '/api/auth/sign-up/',
        body: prepareRegistrationData(body),
      }),
    }),
  }),
});

function prepareRegistrationData(data = {}) {
  const preparedData = Object.entries(data)
    .filter(([key]) => ALLOWED.includes(key))
    .map(([key, value]) => [key, value.trim()]);
  return Object.fromEntries(preparedData);
}

export const { useCreateUserMutation } = authAPI;
