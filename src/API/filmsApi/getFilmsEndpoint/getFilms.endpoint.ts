import { API_KEY, defaultSeacrhParams } from '../../constants';
import { GET_FILMS_URL } from '../endpoints';
import { filmsApi } from '../filmsApi';
import { GetFilmsArgs, GetFilmsResponse } from './types';

const getFilmsApi = filmsApi.injectEndpoints({
  endpoints: (build) => ({
    getFilms: build.query<GetFilmsResponse, GetFilmsArgs>({
      query: ({ searchParams }) => ({
        url: GET_FILMS_URL,
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
        params: {
          ...defaultSeacrhParams,
          sortBy: 'popularity.desc',
          ...searchParams,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetFilmsQuery, useLazyGetFilmsQuery } = getFilmsApi;
