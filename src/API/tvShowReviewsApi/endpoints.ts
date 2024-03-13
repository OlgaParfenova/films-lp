import { API_BASE } from '../constants';

export const GET_TV_SHOW_REVIEWS_URL = (id: number) => {
  return `${API_BASE}/tv/${id}/reviews`;
};
