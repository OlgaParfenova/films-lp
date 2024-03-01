import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filmDetailsApi = createApi({
  reducerPath: 'filmDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
