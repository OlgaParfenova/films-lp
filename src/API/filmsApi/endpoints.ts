import { API_BASE } from '../constants';

export const GET_FILMS_URL = `${API_BASE}/discover/movie`;

/*
export const GET_FILMS_URL = ({
  page,
  dateFrom,
  dateTo,
  sortBy = 'popularity.desc',
  voteMin,
  voteMax,
  minVotesNumber,
  genreId,
  runtimeMin,
  runtimeMax,
  monetizationType,
}: GetFilmsArgs) => {
  `?include_adult=false&include_video=false&language=en-US&page=${page}&region=US${
    dateFrom ? `&release_date.gte=${dateFrom}` : ''
  }${
    dateTo ? `&release_date.lte=${dateTo}` : ''
  }&sort_by=${sortBy}&vote_average.gte=${voteMin}&vote_average.lte=${voteMax}${
    minVotesNumber ? `&vote_count.gte=${minVotesNumber}` : ''
  }&watch_region=US${genreId ? `&with_genres=${genreId}` : ''}${
    runtimeMin ? `&with_runtime.gte=${runtimeMin}` : ''
  }${runtimeMax ? `&with_runtime.lte=${runtimeMax}` : ''}${
    monetizationType ? `&with_watch_monetization_types=${monetizationType}` : ''
  }`;
};
*/
