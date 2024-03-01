export const API_BASE = 'https://api.themoviedb.org/3';
export const API_KEY = import.meta.env.VITE_APP_KEY;
export const defaultSeacrhParams = {
  language: 'en-US',
  watch_region: 'US',
  region: 'US',
} as const;
