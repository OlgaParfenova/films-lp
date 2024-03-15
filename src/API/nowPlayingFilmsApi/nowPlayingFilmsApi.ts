import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const nowPlayingfFilmsApi = createApi({
  reducerPath: 'nowPlayingfFilmsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
