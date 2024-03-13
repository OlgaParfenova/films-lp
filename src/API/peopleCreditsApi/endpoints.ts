import { API_BASE } from '../constants';

export const GET_PEOPLE_CREDITS_URL = (id: number) =>
  `${API_BASE}/person/${id}/combined_credits`;
