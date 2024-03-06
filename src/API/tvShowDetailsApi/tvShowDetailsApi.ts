import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tvShowDetailsApi = createApi({
  reducerPath: 'tvShowDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
