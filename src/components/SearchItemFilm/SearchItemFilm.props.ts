import { HTMLAttributes } from 'react';

type SearchItemFilm = {
  title: string;
  date: string;
  overview: string;
  picture: string;
};

export type SearchItemFilmProps = HTMLAttributes<HTMLDivElement> & SearchItemFilm;