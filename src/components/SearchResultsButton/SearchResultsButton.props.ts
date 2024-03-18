import { HTMLAttributes } from 'react';

type SearchResultsButton = {
  title: string;
  number: number;
};

export type SearchResultsButtonProps = HTMLAttributes<HTMLButtonElement> &
  SearchResultsButton;
