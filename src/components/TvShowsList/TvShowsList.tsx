import { FC } from 'react';
import { TvShowCard } from '../TvShowCard';
import { TvShowsListProps } from './TvShowsList.props';

export const TVShowsList: FC<TvShowsListProps> = ({ shows }) => {
  return shows.map((element) => (
    <TvShowCard
      key={element.id}
      id={element.id}
      title={element.name}
      rating={element.vote_average}
      posterURL={'https://image.tmdb.org/t/p/original' + element.poster_path}
    />
  ));
};
