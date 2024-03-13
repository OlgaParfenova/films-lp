import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tvShowsGenresApi = createApi({
  reducerPath: 'tvShowsGenresApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
