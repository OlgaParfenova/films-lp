import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tvShowReviewsApi = createApi({
  reducerPath: 'tvShowReviewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
