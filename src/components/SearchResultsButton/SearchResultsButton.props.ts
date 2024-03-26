import { HTMLAttributes } from 'react';

type SearchResultsButton = {
  title: string;
  number: number;
  isFocused?: boolean;
};

export type SearchResultsButtonProps = HTMLAttributes<HTMLButtonElement> &
  SearchResultsButton;
