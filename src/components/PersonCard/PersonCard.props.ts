import { HTMLAttributes } from 'react';

type PersonCard = {
  id: number;
  name: string;
  known_for: KnownFor[];
  profile_path: string;
};

type KnownFor = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: string;
  origin_country?: string[];
};

export type PersonCardProps = Omit<HTMLAttributes<HTMLDivElement>, 'id'> &
  PersonCard;
