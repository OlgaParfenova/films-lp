import { API_KEY, defaultSearchParams } from '../../constants';
import { GET_TV_SHOW_DETAILS_URL } from '../endpoints';
import { tvShowDetailsApi } from '../tvShowDetailsApi';
import { GetTvShowDetailsArg, GetTvShowDetailsResponse } from './types';

const getTvShowDetailsApi = tvShowDetailsApi.injectEndpoints({
  endpoints: (build) => ({
    getTvShowDetails: build.query<
      GetTvShowDetailsResponse,
      GetTvShowDetailsArg
    >({
      query: (id) => ({
        url: `${GET_TV_SHOW_DETAILS_URL}/${id}`,
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

export const { useGetTvShowDetailsQuery, useLazyGetTvShowDetailsQuery } =
  getTvShowDetailsApi;
