import { API_KEY } from '../../constants';
import { GET_FILM_REVIEWS_URL } from '../endpoints';
import { filmReviewsApi } from '../filmReviewsApi';
import { GetFilmReviewsResponse, GetFilmReviewsArg } from './types';

const getFilmReviewsApi = filmReviewsApi.injectEndpoints({
  endpoints: (build) => ({
    getFilmReviews: build.query<GetFilmReviewsResponse, GetFilmReviewsArg>({
      query: (id) => ({
        url: GET_FILM_REVIEWS_URL(id),
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetFilmReviewsQuery, useLazyGetFilmReviewsQuery } =
  getFilmReviewsApi;
