import { HTMLAttributes } from 'react';

type SearchResults = {
  films_number: number;
  tvShows_number: number;
  people_number: number;
  onFilmsClick: () => void;
  onPeopleClick: () => void;
  focusedButton: 'films' | 'people' | 'tvShow' | '';
};

export type SearchResultsProps = HTMLAttributes<HTMLDivElement> & SearchResults;
