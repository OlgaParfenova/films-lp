// import { Result } from '../../API/types'; ::TODO

type FilmsMockInfo = {
  title: string;
  posterURL: string;
  rating: number;
};

// export type FilmsListProps = {
//   films: Result[];
// };

export type FilmsListProps = {
  films: FilmsMockInfo[];
};
