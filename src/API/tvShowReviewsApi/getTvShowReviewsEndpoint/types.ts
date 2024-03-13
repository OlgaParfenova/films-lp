import { ReviewsWithPaginationResponse } from '../../types';
import { TvShowReview } from './models';

export type GetTvShowReviewsResponse = ReviewsWithPaginationResponse<
  TvShowReview[]
>;

export type GetTvShowReviewsArg = number;
