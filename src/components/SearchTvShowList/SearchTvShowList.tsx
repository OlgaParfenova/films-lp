import { FC } from 'react';
import { SearchTvShowListProps } from './SearchTvShowList.props';
import { SearchItemTvShow } from '../SearchItemTvShow';

export const SearchTvShowList: FC<SearchTvShowListProps> = ({ tvShows }) => {
  return tvShows.map((element) => (
    <SearchItemTvShow
      key={element.id}
      name={element.name}
      first_air_date={element.first_air_date}
      overview={element.overview}
      poster_path={element.poster_path}
      id={element.id}
    />
  ));
};
