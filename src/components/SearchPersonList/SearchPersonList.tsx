import { FC } from 'react';
import { SearchPersonListProps } from './SearchPersonList.props';
import { SearchItemPerson } from '..';

export const SearchPersonList: FC<SearchPersonListProps> = ({ people }) => {
  return people.map((element) => (
    <SearchItemPerson
      key={element.id}
      id={element.id}
      name={element.name}
      profile_path={element.profile_path}
      known_for_department={element.known_for_department}
      known_for={element.known_for}
    />
  ));
};
