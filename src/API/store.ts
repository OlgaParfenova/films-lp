import { configureStore } from '@reduxjs/toolkit';
import { filmsApi } from './filmsApi';
import { genresApi } from './genresApi';
import { filmDetailsApi } from './filmDetailsApi';
import { reviewsApi } from './reviewsApi';

export const store = configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
    [genresApi.reducerPath]: genresApi.reducer,
    [filmDetailsApi.reducerPath]: filmDetailsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      filmsApi.middleware,
      genresApi.middleware,
      filmDetailsApi.middleware,
      reviewsApi.middleware
    ),
});
