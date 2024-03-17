import { ApiSlice } from '../../api/ApiSlice';

export const extendedApiSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (post) => ({
        url: '/account/custom-login/',
        method: 'POST',
        body: post,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    refreshToken: builder.mutation({
      query: (post) => ({
        url: '/token/refresh/',
        method: 'POST',
        body: post,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation, useRefreshTokenMutation } = extendedApiSlice;
