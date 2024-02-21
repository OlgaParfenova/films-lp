import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const genresApi = createApi({
  reducerPath: 'genresApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
