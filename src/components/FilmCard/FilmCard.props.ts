import { HTMLAttributes } from 'react';

type FilmCard = {
  title: string;
  posterURL: string;
  rating: number;
  id: string | number;
};

export type FilmCardProps = Omit<HTMLAttributes<HTMLDivElement>, 'id'> &
  FilmCard;
