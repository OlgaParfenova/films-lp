import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const peopleDetailsApi = createApi({
  reducerPath: 'peopleDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
