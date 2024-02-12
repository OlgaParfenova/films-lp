export const routes = {
  mainPageURL: '/',
  tvShowsPageURL: '/tvshows',
  peoplePageURL: '/people',
  loginPageURL: '/login',
  registerPageURL: '/register',
  notFoundPageURL: '/404',
  filmPageURL: (id: string | number) => `/film/${id}`,
  categoryPageURL: (id: string | number) => `/category/${id}`,
  personPageURL: (id: string | number) => `/person/${id}`,
};
