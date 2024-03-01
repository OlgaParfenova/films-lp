import { Film } from './models';
import { WithPaginationResponse, SearchParams } from '../../types';

/*
export type GetFilmsArgs = {
  page: number;
  dateFrom?: string;
  dateTo?: string;
  sortBy:
    | 'popularity.desc'
    | 'popularity.asc'
    | 'vote_average.desc'
    | 'vote_average.asc'
    | 'primary_release_date.desc'
    | 'primary_release_date.asc'
    | 'title.desc'
    | 'title.asc';
  voteMin: number;
  voteMax: number;
  minVotesNumber?: number;
  genreId?: number;
  runtimeMin?: number;
  runtimeMax?: number;
  monetizationType?: 'flatrate' | 'free' | 'ads' | 'rent' | 'buy';
};
*/

export type GetFilmsArgs = {
  searchParams?: SearchParams;
};

export type GetFilmsResponse = WithPaginationResponse<Film[]>;
