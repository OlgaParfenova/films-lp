import { configureStore } from '@reduxjs/toolkit';
import { filmsApi } from './filmsApi';
import { genresApi } from '../API/genresApi';

export const store = configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
    [genresApi.reducerPath]: genresApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware, genresApi.middleware),
});
