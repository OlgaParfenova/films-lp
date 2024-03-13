import { TvShow} from './models';
import { WithPaginationResponse, SearchParams } from '../../types';

export type GetTvShowsArgs = {
  searchParams?: SearchParams;
};

export type GetTvShowsResponse = WithPaginationResponse<TvShow[]>;
