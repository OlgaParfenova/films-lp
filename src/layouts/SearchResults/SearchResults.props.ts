import { HTMLAttributes } from 'react';

type SearchResults = {
  films_number: number;
  tvShows_number: number;
  people_number: number;
  onFilmsClick: () => void;
  onPeopleClick: () => void;
  onTvShowsClick: () => void;
  focusedButton: 'films' | 'people' | 'tvShows' | '';
};

export type SearchResultsProps = HTMLAttributes<HTMLDivElement> & SearchResults;
