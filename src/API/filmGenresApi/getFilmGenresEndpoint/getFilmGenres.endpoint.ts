import { filmGenresApi } from '../filmGenresApi';
import { GetFilmGenresArgs, GetFilmGenresResponse } from './types';
import { GET_FILM_GENRES_URL } from '../endpoints';
import { API_KEY } from '../../constants';

const getFilmGenresApi = filmGenresApi.injectEndpoints({
  endpoints: (build) => ({
    getFilmGenres: build.query<GetFilmGenresResponse, GetFilmGenresArgs>({
      query: () => ({
        url: GET_FILM_GENRES_URL,
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetFilmGenresQuery, useLazyGetFilmGenresQuery } =
  getFilmGenresApi;
