import { Person } from './models';
import { SearchParams, WithPaginationResponse } from '../../types';

export type GetPeopleArgs = {
  searchParams?: SearchParams;
};

export type GetPeopleResponse = WithPaginationResponse<Person[]>;
