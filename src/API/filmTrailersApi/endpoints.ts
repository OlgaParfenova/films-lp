import { API_BASE } from '../constants';

export const GET_FILM_TRAILERS_URL = (id: number) => {
  return `${API_BASE}/movie/${id}/videos`;
};
