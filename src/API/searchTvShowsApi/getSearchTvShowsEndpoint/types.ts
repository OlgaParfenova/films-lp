import { SearchTvShowsResult } from './models';
import { WithPaginationResponse, SearchParams } from '../../types';

export type GetSearchArgs = {
  searchParams?: SearchParams;
};

export type GetSearchResponse = WithPaginationResponse<SearchTvShowsResult[]>;