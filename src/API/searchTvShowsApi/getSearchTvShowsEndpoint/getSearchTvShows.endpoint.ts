import { API_KEY, defaultSearchParams } from '../../constants';
import { GET_SEARCH_TV_SHOWS_URL } from '../endpoints';
import { searchTvShowsApi } from '../searchTvShowsApi';
import { GetSearchResponse, GetSearchArgs } from './types';

const getSearchTvShowsApi = searchTvShowsApi.injectEndpoints({
  endpoints: (build) => ({
    getSearchTvShows: build.query<GetSearchResponse, GetSearchArgs>({
      query: ({ searchParams }) => ({
        url: GET_SEARCH_TV_SHOWS_URL,
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

export const { useGetSearchTvShowsQuery, useLazyGetSearchTvShowsQuery } =
  getSearchTvShowsApi;
