import { tvShowsGenresApi } from '../tvShowsGenresApi';
import { GetTvShowsGenresArgs, GetTvShowsGenresResponse } from './types';
import { GET_TV_SHOWS_GENRES_URL } from '../endpoints';
import { API_KEY } from '../../constants';

const getTvShowsGenresApi = tvShowsGenresApi.injectEndpoints({
  endpoints: (build) => ({
    getTvShowsGenres: build.query<
      GetTvShowsGenresResponse,
      GetTvShowsGenresArgs
    >({
      query: () => ({
        url: GET_TV_SHOWS_GENRES_URL,
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetTvShowsGenresQuery, useLazyGetTvShowsGenresQuery } =
  getTvShowsGenresApi;
