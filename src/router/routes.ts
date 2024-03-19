export const routes = {
  mainPageURL: '/',
  filmsPageURL: '/films',
  tvShowsPageURL: '/tvshows',
  peoplePageURL: '/people',
  loginPageURL: '/login',
  registerPageURL: '/register',
  searchPageURL: '/search',
  notFoundPageURL: '/404',
  filmPageURL: (id: string | number) => `/film/${id}`,
  tvShowPageURL: (id: string | number) => `/tvshow/${id}`,
  categoryPageURL: (id: string | number) => `/category/${id}`,
  personPageURL: (id: string | number) => `/person/${id}`,
};
