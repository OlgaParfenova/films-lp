import { HTMLAttributes } from 'react';

type FilmCard = {
  title: string;
  posterURL: string;
  rating: number;
};

export type FilmCardProps = HTMLAttributes<HTMLDivElement> & FilmCard;
