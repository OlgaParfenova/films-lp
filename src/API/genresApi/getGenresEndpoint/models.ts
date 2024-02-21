export type Genre = {
  id: number;
  name: string;
};

export type GetGenresResponseData = {
  genres: Genre[];
};
