import { API_KEY } from '../../constants';
import { GET_TV_SHOW_TRAILERS_URL } from '../endpoints';
import { tvShowTrailersApi } from '../tvShowTrailersApi';
import { GetTvShowTrailersResponse, GetTvShowTrailersArg } from './types';

const getTvShowTrailersApi = tvShowTrailersApi.injectEndpoints({
  endpoints: (build) => ({
    getTvShowTrailers: build.query<
      GetTvShowTrailersResponse,
      GetTvShowTrailersArg
    >({
      query: (id) => ({
        url: GET_TV_SHOW_TRAILERS_URL(id),
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetTvShowTrailersQuery, useLazyGetTvShowTrailersQuery } =
  getTvShowTrailersApi;
