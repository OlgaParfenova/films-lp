import { Cast, Crew } from './models';

export type GetPeopleCreditsResponse = {
  cast: Cast[];
  crew: Crew[];
  id: number;
};

export type GetPeopleCreditsArg = number;
