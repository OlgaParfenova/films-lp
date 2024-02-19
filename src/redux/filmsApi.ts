import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE, API_KEY } from '../API/constants';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    headers: {
      accept: 'application/json',
      Authorization: API_KEY,
    },
  }),
  endpoints: (build) => ({
    getFilms: build.query({
      query: () => '/movie/popular?language=en-US&page=1',
    }),
  }),
});

export const { useGetFilmsQuery } = filmsApi;
