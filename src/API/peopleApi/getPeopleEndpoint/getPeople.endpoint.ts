import { API_KEY } from '../../constants';
import { GET_PEOPLE_URL } from '../endpoints';
import { peopleApi } from '../peopleApi';
import { GetPeopleArgs, GetPeopleResponse } from './types';

const getPeopleApi = peopleApi.injectEndpoints({
  endpoints: (build) => ({
    getPeople: build.query<GetPeopleResponse, GetPeopleArgs>({
      query: ({ searchParams }) => ({
        url: GET_PEOPLE_URL,
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
        params: {
          language: 'en-US',
          page: 1,
          ...searchParams,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetPeopleQuery, useLazyGetPeopleQuery } = getPeopleApi;
