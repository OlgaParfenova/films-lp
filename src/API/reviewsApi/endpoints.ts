import { API_BASE } from '../constants';

export const GET_REVIEWS_URL = (id: number) => {
  return `${API_BASE}/movie/${id}/reviews`;
};
