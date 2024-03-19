import { configureStore } from '@reduxjs/toolkit';
import { filmsApi } from './filmsApi';
import { filmGenresApi } from './filmGenresApi';
import { filmDetailsApi } from './filmDetailsApi';
import { filmReviewsApi } from './filmReviewsApi';
import { tvShowsGenresApi } from './tvShowsGenresApi';
import { tvShowsApi } from './tvShowsApi';
import { tvShowDetailsApi } from './tvShowDetailsApi';
import { tvShowReviewsApi } from './tvShowReviewsApi';
import { peopleApi } from './peopleApi';
import { peopleDetailsApi } from './peopleDetailsApi';
import { peopleCreditsApi } from './peopleCreditsApi';
import { nowPlayingfFilmsApi } from './nowPlayingFilmsApi';
import { searchApi } from './searchApi';

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
    [peopleApi.reducerPath]: peopleApi.reducer,
    [peopleDetailsApi.reducerPath]: peopleDetailsApi.reducer,
    [peopleCreditsApi.reducerPath]: peopleCreditsApi.reducer,
    [nowPlayingfFilmsApi.reducerPath]: nowPlayingfFilmsApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
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
      tvShowReviewsApi.middleware,
      peopleApi.middleware,
      peopleDetailsApi.middleware,
      peopleCreditsApi.middleware,
      nowPlayingfFilmsApi.middleware,
      searchApi.middleware
    ),
});
