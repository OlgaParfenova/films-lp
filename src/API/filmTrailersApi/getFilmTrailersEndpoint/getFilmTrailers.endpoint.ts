import { API_KEY } from '../../constants';
import { GET_FILM_TRAILERS_URL } from '../endpoints';
import { filmTrailersApi } from '../filmTrailersApi';
import { GetFilmTrailersResponse, GetFilmTrailersArg } from './types';

const getFilmTrailersApi = filmTrailersApi.injectEndpoints({
  endpoints: (build) => ({
    getFilmTrailers: build.query<GetFilmTrailersResponse, GetFilmTrailersArg>({
      query: (id) => ({
        url: GET_FILM_TRAILERS_URL(id),
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetFilmTrailersQuery, useLazyGetFilmTrailersQuery } =
  getFilmTrailersApi;
