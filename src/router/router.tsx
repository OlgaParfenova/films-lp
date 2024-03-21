import { createBrowserRouter } from 'react-router-dom';
import {
  TVShowsPage,
  FilmsPage,
  LoginPage,
  NotFoundPage,
  PeoplePage,
  RegisterPage,
  FilmDetailsPage,
  TvShowDetailsPage,
  PersonDetailsPage,
  MainPage,
  SearchPage,
} from '../pages';
import { routes } from './routes';
import { Layout } from '../Layout';

export const router = createBrowserRouter([
  {
    path: routes.mainPageURL,
    element: <Layout />,
    children: [
      {
        path: routes.filmsPageURL,
        element: <FilmsPage />,
      },
      {
        path: routes.tvShowsPageURL,
        element: <TVShowsPage />,
      },
      {
        path: routes.peoplePageURL,
        element: <PeoplePage />,
      },
      {
        path: routes.loginPageURL,
        element: <LoginPage />,
      },
      {
        path: routes.registerPageURL,
        element: <RegisterPage />,
      },
      {
        path: routes.searchPageURL,
        element: <SearchPage />,
      },
      {
        path: routes.searchFilmsPageURL,
        element: <SearchPage />,
      },
      {
        path: routes.searchPeoplePageURL,
        element: <SearchPage />,
      },
      {
        path: routes.searchTvShowsPageURL,
        element: <SearchPage />,
      },
      {
        path: routes.filmPageURL(':id'),
        element: <FilmDetailsPage />,
      },
      {
        path: routes.tvShowPageURL(':id'),
        element: <TvShowDetailsPage />,
      },
      {
        path: routes.personPageURL(':id'),
        element: <PersonDetailsPage />,
      },
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
