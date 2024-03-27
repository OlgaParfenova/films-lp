import { store } from './store';

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

export type WithDatePaginationResponse<T> = {
  dates: Dates;
  page: number;
  total_pages: number;
  total_results: number;
  results: T;
};

export type Dates = {
  maximum: string;
  minimum: string;
};

export type RootState = ReturnType<typeof store.getState>;