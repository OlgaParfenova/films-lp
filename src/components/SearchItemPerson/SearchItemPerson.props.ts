import { HTMLAttributes } from 'react';

type SearchItemPerson = {
  name: string;
  profile_path: string;
  known_for_department: string;
  known_for: KnownFor[];
};

type KnownFor = {
  adult: boolean;
  backdrop_path?: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path?: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SearchItemPersonProps = HTMLAttributes<HTMLDivElement> &
  SearchItemPerson;
