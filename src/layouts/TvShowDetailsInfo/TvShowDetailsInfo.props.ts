import { HTMLAttributes } from 'react';

type TvShowDetailsInfo = {
  showName: string;
  rating: number;
  runtime: number[];
  genres: Genre[];
  tagline: string;
  storyline: string;
  poster: string;
  first_air_date: string;
  last_air_date: string;
  number_of_episodes: number;
  number_of_seasons: number;
  created_by: CreatedBy[];
  origin_country: string[];
};

type Genre = {
  id: number;
  name: string;
};

type CreatedBy = {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
};

export type TvShowDetailsInfoProps = HTMLAttributes<HTMLDivElement> &
  TvShowDetailsInfo;
