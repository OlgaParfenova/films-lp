import { API_KEY, defaultSearchParams } from '../../constants';
import { GET_NOW_PLAYING_FILMS_URL } from '../endpoints';
import { nowPlayingfFilmsApi } from '../nowPlayingFilmsApi';
import { GetNowPlayingFilmsResponse, GetNowPlayingFilmsArgs } from './types';

const getNowPlayingFilmsApi = nowPlayingfFilmsApi.injectEndpoints({
  endpoints: (build) => ({
    getNowPlayingFilms: build.query<
      GetNowPlayingFilmsResponse,
      GetNowPlayingFilmsArgs
    >({
      query: () => ({
        url: GET_NOW_PLAYING_FILMS_URL,
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
        params: {
          ...defaultSearchParams,
          page: 1,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetNowPlayingFilmsQuery, useLazyGetNowPlayingFilmsQuery } =
  getNowPlayingFilmsApi;
