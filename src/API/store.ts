import { configureStore } from '@reduxjs/toolkit';
import { filmsApi } from './filmsApi';
import { filmGenresApi } from './filmGenresApi';
import { filmDetailsApi } from './filmDetailsApi';
import { filmReviewsApi } from './filmReviewsApi';
import { tvShowsGenresApi } from './tvShowsGenresApi';
import { tvShowsApi } from './tvShowsApi';
import { tvShowDetailsApi } from './tvShowDetailsApi';
import { tvShowReviewsApi } from './tvShowReviewsApi';

export const store = configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
    [filmGenresApi.reducerPath]: filmGenresApi.reducer,
    [filmDetailsApi.reducerPath]: filmDetailsApi.reducer,
    [filmReviewsApi.reducerPath]: filmReviewsApi.reducer,
    [tvShowsGenresApi.reducerPath]: tvShowsGenresApi.reducer,
    [tvShowsApi.reducerPath]: tvShowsApi.reducer,
    [tvShowDetailsApi.reducerPath]: tvShowDetailsApi.reducer,
    [tvShowReviewsApi.reducerPath]: tvShowReviewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      filmsApi.middleware,
      filmGenresApi.middleware,
      filmDetailsApi.middleware,
      filmReviewsApi.middleware,
      tvShowsGenresApi.middleware,
      tvShowsApi.middleware,
      tvShowDetailsApi.middleware,
      tvShowReviewsApi.middleware
    ),
});
