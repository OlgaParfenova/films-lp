import { API_KEY, defaultSearchParams } from '../../constants';
import { GET_SEARCH_FILMS_URL } from '../endpoints';
import { searchFilmsApi } from '../searchFilmsApi';
import { GetSearchResponse, GetSearchArgs } from './types';

const getSearchFilmsApi = searchFilmsApi.injectEndpoints({
  endpoints: (build) => ({
    getSearchFilms: build.query<GetSearchResponse, GetSearchArgs>({
      query: ({ searchParams }) => ({
        url: GET_SEARCH_FILMS_URL,
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
        params: {
          ...defaultSearchParams,
          ...searchParams,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetSearchFilmsQuery, useLazyGetSearchFilmsQuery } =
  getSearchFilmsApi;
