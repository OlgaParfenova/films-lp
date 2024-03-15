import { API_BASE } from '../constants';

export const GET_PEOPLE_DETAILS_URL = (id: number) => `${API_BASE}/person/${id}`;
