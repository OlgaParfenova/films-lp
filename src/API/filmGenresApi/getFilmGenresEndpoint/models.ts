export type Genre = {
  id: number;
  name: string;
};

export type GetFilmGenresResponseData = {
  genres: Genre[];
};
