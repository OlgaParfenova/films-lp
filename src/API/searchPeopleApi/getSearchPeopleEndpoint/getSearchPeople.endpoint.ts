import { API_KEY, defaultSearchParams } from '../../constants';
import { GET_SEARCH_PEOPLE_URL } from '../endpoints';
import { searchPeopleApi } from '../searchPeopleApi';
import { GetSearchResponse, GetSearchArgs } from './types';

const getSearchPeopleApi = searchPeopleApi.injectEndpoints({
  endpoints: (build) => ({
    getSearchPeople: build.query<GetSearchResponse, GetSearchArgs>({
      query: ({ searchParams }) => ({
        url: GET_SEARCH_PEOPLE_URL,
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
        params: {
          ...defaultSearchParams,
          ...searchParams,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetSearchPeopleQuery, useLazyGetSearchPeopleQuery } =
  getSearchPeopleApi;
