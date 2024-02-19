import { FC } from 'react';
import { FilmCard } from '../FilmCard';
import { FilmsListProps } from './FilmsList.props';

export const FilmsList: FC<FilmsListProps> = ({ films }) => {
  return films.map((element) => (
    <FilmCard
      key={element.id}
      id={element.id}
      title={element.title}
      rating={element.vote_average}
      posterURL={'https://image.tmdb.org/t/p/original' + element.poster_path}
    />
  ));
};
