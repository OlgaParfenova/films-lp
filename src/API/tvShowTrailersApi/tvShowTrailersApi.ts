import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tvShowTrailersApi = createApi({
  reducerPath: 'tvShowTrailersApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
