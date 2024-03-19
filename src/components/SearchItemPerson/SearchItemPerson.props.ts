import { HTMLAttributes } from 'react';
import { SearchResult } from '../../API/searchApi/getSearchEndpoint';

export type SearchItemPersonProps = Omit<HTMLAttributes<HTMLDivElement>, 'id'> &
  SearchResult;
