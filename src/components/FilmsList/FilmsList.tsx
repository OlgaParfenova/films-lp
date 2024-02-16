import { FC } from 'react';
import { FilmCard } from '../FilmCard';
import { FilmsListProps } from './FilmsList.props';

export const FilmsList: FC<FilmsListProps> = ({ films }) => {
  return films.map((element) => (
    <FilmCard
      key={element.title}
      //   id={element.id}
      title={element.title}
      rating={element.rating}
      posterURL={element.posterURL}
    />
  ));
};
