import { API_KEY, defaultSearchParams } from '../../constants';
import { GET_PEOPLE_CREDITS_URL } from '../endpoints';
import { peopleCreditsApi } from '../peopleCreditsApi';
import { GetPeopleCreditsResponse, GetPeopleCreditsArg } from './types';

const getPeopleCreditsApi = peopleCreditsApi.injectEndpoints({
  endpoints: (build) => ({
    getPeopleCredits: build.query<
      GetPeopleCreditsResponse,
      GetPeopleCreditsArg
    >({
      query: (id) => ({
        url: GET_PEOPLE_CREDITS_URL(id),
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
        params: {
          ...defaultSearchParams,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetPeopleCreditsQuery, useLazyGetPeopleCreditsQuery } =
  getPeopleCreditsApi;
