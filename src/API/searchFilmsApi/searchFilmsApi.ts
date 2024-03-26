import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchFilmsApi = createApi({
  reducerPath: 'searchFilmsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
