import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tvShowsApi = createApi({
  reducerPath: 'tvShowsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
