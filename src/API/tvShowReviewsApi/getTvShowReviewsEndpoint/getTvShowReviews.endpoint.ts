import { API_KEY } from '../../constants';
import { GET_TV_SHOW_REVIEWS_URL } from '../endpoints';
import { tvShowReviewsApi } from '../tvShowReviewsApi';
import { GetTvShowReviewsArg, GetTvShowReviewsResponse } from './types';

const getTvShowReviewsApi = tvShowReviewsApi.injectEndpoints({
  endpoints: (build) => ({
    getTvShowReviews: build.query<
      GetTvShowReviewsResponse,
      GetTvShowReviewsArg
    >({
      query: (id) => ({
        url: GET_TV_SHOW_REVIEWS_URL(id),
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetTvShowReviewsQuery, useLazyGetTvShowReviewsQuery } =
  getTvShowReviewsApi;
