import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchTvShowsApi = createApi({
  reducerPath: 'searchTvShowsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
