import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filmGenresApi = createApi({
  reducerPath: 'filmGenresApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
