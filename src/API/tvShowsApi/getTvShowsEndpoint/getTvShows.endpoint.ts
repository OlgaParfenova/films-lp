import { API_KEY, defaultSearchParams } from '../../constants';
import { GET_TV_SHOWS_URL } from '../endpoints';
import { tvShowsApi } from '../tvShowsApi';
import { GetTvShowsArgs, GetTvShowsResponse } from './types';

const getTvShowsApi = tvShowsApi.injectEndpoints({
  endpoints: (build) => ({
    getTvShows: build.query<GetTvShowsResponse, GetTvShowsArgs>({
      query: ({ searchParams }) => ({
        url: GET_TV_SHOWS_URL,
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
        params: {
          ...defaultSearchParams,
          sortBy: 'popularity.desc',
          ...searchParams,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetTvShowsQuery, useLazyGetTvShowsQuery } = getTvShowsApi;
