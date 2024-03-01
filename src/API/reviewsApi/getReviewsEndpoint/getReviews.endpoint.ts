import { API_KEY } from '../../constants';
import { GET_REVIEWS_URL } from '../endpoints';
import { reviewsApi } from '../reviewsApi';
import { GetReviewsResponse } from './types';

const getReviewsApi = reviewsApi.injectEndpoints({
  endpoints: (build) => ({
    getReviews: build.query<GetReviewsResponse, number>({
      query: (id) => ({
        url: GET_REVIEWS_URL(id),
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetReviewsQuery, useLazyGetReviewsQuery } = getReviewsApi;
