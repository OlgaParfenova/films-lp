import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filmReviewsApi = createApi({
  reducerPath: 'filmReviewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
