import {
  Cast,
  Crew,
} from '../../API/peopleCreditsApi/getPeopleCreditsEndpoint';

export type PersonWorkProps = {
  title: string;
  works: (Cast | Crew)[];
};
