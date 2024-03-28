import { API_KEY} from '../../constants';
import { POST_REGISTER_USER_URL } from '../endpoints';
import { registerUserApi } from '../registerUserApi';
import {PostRegisterUserResponse, PostRegisterUserArg} from './types';

const postRegisterUserApi = registerUserApi.injectEndpoints({
  endpoints: (build) => ({
    postRegisterUser: build.mutation<
      PostRegisterUserResponse,
      PostRegisterUserArg
    >({
      query: ({ name, email, password }) => ({
        url: POST_REGISTER_USER_URL,
        headers: {
          accept: 'application/json',
          Authorization: API_KEY,
        },
        method: 'POST',
        body: { name, email, password },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { usePostRegisterUserMutation } =
  postRegisterUserApi;
