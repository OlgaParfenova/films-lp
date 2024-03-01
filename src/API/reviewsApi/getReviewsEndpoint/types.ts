import { ReviewsWithPaginationResponse } from '../../types';
import { Review } from './models';

export type GetReviewsResponse = ReviewsWithPaginationResponse<Review[]>;
