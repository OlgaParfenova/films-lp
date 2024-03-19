import { FC } from 'react';
import { SearchFilmListProps } from './SearchFilmList.props';
import { SearchItemFilm } from '..';

export const SearchFilmList: FC<SearchFilmListProps> = ({ films }) => {
  return films.map((element) => (
    <SearchItemFilm
      key={element.id}
      title={element.title}
      release_date={element.release_date}
      overview={element.overview}
      poster_path={element.poster_path}
      id={element.id}
    />
  ));
};
