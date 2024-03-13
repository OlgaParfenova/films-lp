export type SearchParams = {
  [key: string]: string;
};

export type WithPaginationResponse<T> = {
  page: number;
  total_pages: number;
  total_results: number;
  results: T;
};

export type ReviewsWithPaginationResponse<T> = {
  id: number;
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
};
