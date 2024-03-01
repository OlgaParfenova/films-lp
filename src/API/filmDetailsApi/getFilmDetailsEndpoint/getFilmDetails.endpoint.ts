import { API_KEY, defaultSearchParams } from '../../constants';
import { GET_FILM_DETAILS_URL } from '../endpoints';
import { filmDetailsApi } from '../filmDetailsApi';
import { GetFilmDetailsResponse } from './types';

const getFilmDetailsApi = filmDetailsApi.injectEndpoints({
  endpoints: (build) => ({
    getFilmDetails: build.query<GetFilmDetailsResponse, number>({
      query: (id) => ({
        url: `${GET_FILM_DETAILS_URL}/${id}`,
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
        params: {
          ...defaultSearchParams,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetFilmDetailsQuery, useLazyGetFilmDetailsQuery } =
  getFilmDetailsApi;
