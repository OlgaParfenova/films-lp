import { HTMLAttributes } from 'react';
import { SearchResult } from '../../API/searchApi/getSearchEndpoint';

export type SearchItemFilmProps = Omit<HTMLAttributes<HTMLDivElement>, 'id'> &
  SearchResult;
