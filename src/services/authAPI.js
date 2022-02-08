import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import prepareHeaders from './prepareHeaders.js';
import prepareData from '../utils/data.js';

const ALLOWED_REG_FIELDS = ['username', 'email', 'password'];
const ALLOWED_LOGIN_FIELDS = ['email', 'password'];

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wallet.goit.ua',
    prepareHeaders,
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

export const { useCreateUserMutation, useAuthUserMutation, useLogOutMutation } = authAPI;
