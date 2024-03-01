import { HTMLAttributes } from 'react';

type Rating = {
  rating: number;
};

export type RatingProps = HTMLAttributes<HTMLDivElement> & Rating;
