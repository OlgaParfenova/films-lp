import { API_KEY, defaultSearchParams } from '../../constants';
import { GET_SEARCH_URL } from '../endpoints';
import { searchApi } from '../searchApi';
import { GetSearchResponse, GetSearchArgs } from './types';

const getSearchApi = searchApi.injectEndpoints({
  endpoints: (build) => ({
    getSearch: build.query<GetSearchResponse, GetSearchArgs>({
      query: ({ searchParams }) => ({
        url: GET_SEARCH_URL,
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
        params: {
          ...defaultSearchParams,
          include_adult: false,
          page: 1,
          ...searchParams,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetSearchQuery, useLazyGetSearchQuery } = getSearchApi;
