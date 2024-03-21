import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchPeopleApi = createApi({
  reducerPath: 'searchPeopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
