import { HTMLAttributes } from 'react';

type FilmDetailsInfo = {
  filmTitle: string;
  rating: number;
  length: number;
  genres: Genre[];
  year: string;
  tagline: string;
  storyline: string;
  poster: string;
};

type Genre = {
  id: number;
  name: string;
};

export type FilmDetailsInfoProps = HTMLAttributes<HTMLDivElement> &
  FilmDetailsInfo;
