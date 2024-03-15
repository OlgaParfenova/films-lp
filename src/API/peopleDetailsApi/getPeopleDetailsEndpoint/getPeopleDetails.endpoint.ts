import { API_KEY, defaultSearchParams } from '../../constants';
import { GET_PEOPLE_DETAILS_URL } from '../endpoints';
import { peopleDetailsApi } from '../peopleDetailsApi';
import { GetPeopleDetailsResponse, GetPeopleDetailsArg } from './types';

const getPeopleDetailsApi = peopleDetailsApi.injectEndpoints({
  endpoints: (build) => ({
    getPeopleDetails: build.query<
      GetPeopleDetailsResponse,
      GetPeopleDetailsArg
    >({
      query: (id) => ({
        url: GET_PEOPLE_DETAILS_URL(id),
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

export const { useGetPeopleDetailsQuery, useLazyGetPeopleDetailsQuery } =
  getPeopleDetailsApi;
