import { HTMLAttributes } from 'react';
import { SearchFilmsResult } from '../../API/searchFilmsApi/getSearchFilmsEndpoint/models';

export type SearchItemFilmProps = Omit<HTMLAttributes<HTMLDivElement>, 'id'> &
  Pick<
    SearchFilmsResult,
    'title' | 'release_date' | 'overview' | 'poster_path' | 'id'
  >;
