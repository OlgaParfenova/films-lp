import { HTMLAttributes } from 'react';
import { SearchPeopleResult } from '../../API/searchPeopleApi/getSearchPeopleEndpoint/models';

export type SearchItemPersonProps = Omit<HTMLAttributes<HTMLDivElement>, 'id'> &
  Pick<
    SearchPeopleResult,
    'name' | 'profile_path' | 'known_for_department' | 'known_for' | 'id'
  >;
