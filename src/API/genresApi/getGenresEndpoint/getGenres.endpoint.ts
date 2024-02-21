import { genresApi } from '../genresApi';
import { GetGenresArgs, GetGenresResponse } from './types';
import { GET_GENRES_URL } from '../endpoints';
import { API_KEY } from '../../constants';

const getGenresApi = genresApi.injectEndpoints({
  endpoints: (build) => ({
    getGenres: build.query<GetGenresResponse, GetGenresArgs>({
      query: () => ({
        url: GET_GENRES_URL,
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetGenresQuery, useLazyGetGenresQuery } = getGenresApi;
