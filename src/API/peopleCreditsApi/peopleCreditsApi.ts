import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const peopleCreditsApi = createApi({
  reducerPath: 'peopleCreditsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
