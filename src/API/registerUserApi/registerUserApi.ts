import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const registerUserApi = createApi({
  reducerPath: 'registerUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
