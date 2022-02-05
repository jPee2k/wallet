import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ALLOWED_REG_FIELDS = ['username', 'email', 'password'];
const ALLOWED_LOGIN_FIELDS = ['email', 'password'];

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
        body: prepareData(body, ALLOWED_REG_FIELDS),
      }),
    }),
    authUser: build.mutation({
      query: (body) => ({
        method: 'POST',
        url: '/api/auth/sign-in/',
        body: prepareData(body, ALLOWED_LOGIN_FIELDS),
      }),
    }),
    logOut: build.mutation({
      query: () => ({
        method: 'DELETE',
        url: '/api/auth/sign-out/',
      }),
    }),
  }),
});

function prepareData(data = {}, allowed = []) {
  const preparedData = Object.entries(data)
    .filter(([key]) => allowed.includes(key))
    .map(([key, value]) => [key, value.trim()]);

  return Object.fromEntries(preparedData);
}

export const { useCreateUserMutation, useAuthUserMutation, useLogOutMutation } = authAPI;
