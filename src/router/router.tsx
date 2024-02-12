import { createBrowserRouter } from 'react-router-dom';
import {
  TVShowsPage,
  FilmsPage,
  LoginPage,
  NotFoundPage,
  PeoplePage,
  RegisterPage,
} from '../pages';
import { routes } from './routes';
import { Layout } from '../Layout';

export const router = createBrowserRouter([
  {
    path: routes.mainPageURL,
    element: <Layout />,
    children: [
      {
        path: routes.mainPageURL,
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
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
