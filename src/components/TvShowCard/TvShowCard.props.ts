import { HTMLAttributes } from 'react';

type TvShowCard = {
  title: string;
  posterURL: string;
  rating: number;
  id: string | number;
};

export type TvShowCardProps = Omit<HTMLAttributes<HTMLDivElement>, 'id'> &
  TvShowCard;
