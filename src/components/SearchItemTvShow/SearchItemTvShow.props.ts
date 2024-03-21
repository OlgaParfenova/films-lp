import { HTMLAttributes } from 'react';
import { SearchTvShowsResult } from '../../API/searchTvShowsApi/getSearchTvShowsEndpoint/models';

export type SearchItemTvShowProps = Omit<HTMLAttributes<HTMLDivElement>, 'id'> &
  Pick<
    SearchTvShowsResult,
    'name' | 'first_air_date' | 'overview' | 'poster_path' | 'id'
  >;
