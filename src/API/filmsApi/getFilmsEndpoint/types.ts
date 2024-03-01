import { Film } from './models';
import { WithPaginationResponse, SearchParams } from '../../types';

export type GetFilmsArgs = {
  searchParams?: SearchParams;
};

export type GetFilmsResponse = WithPaginationResponse<Film[]>;
