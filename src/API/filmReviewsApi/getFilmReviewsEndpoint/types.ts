import { ReviewsWithPaginationResponse } from '../../types';
import { FilmReview } from './models';

export type GetFilmReviewsResponse = ReviewsWithPaginationResponse<
  FilmReview[]
>;

export type GetFilmReviewsArg = number;
