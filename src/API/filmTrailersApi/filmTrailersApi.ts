import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filmTrailersApi = createApi({
  reducerPath: 'filmTrailersApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
