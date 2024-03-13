import { FC } from 'react';
import { PersonCard } from '../PersonCard';
import { PeopleListProps } from './PeopleList.props';

export const PeopleList: FC<PeopleListProps> = ({ people }) => {
  return people.map((element) => (
    <PersonCard
      key={element.id}
      id={element.id}
      name={element.name}
      known_for={element.known_for}
      profile_path={
        'https://image.tmdb.org/t/p/original' + element.profile_path
      }
    />
  ));
};
