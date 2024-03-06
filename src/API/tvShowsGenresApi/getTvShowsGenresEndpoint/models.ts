export type TvShowsGenre = {
  id: number;
  name: string;
};

export type GetTvShowsGenresResponseData = {
  genres: TvShowsGenre[];
};
