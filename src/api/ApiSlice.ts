import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { BASE_URL } from './Request';
import { StorageService } from './StorageService';
import { RefreshTokenHandler } from '../helper/refreshTokenHandler';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: async (headers) => {
    const token = StorageService.load('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    await RefreshTokenHandler;
    return headers;
  },
});

export const ApiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: baseQuery,
  tagTypes: ['Login', 'get_ibs'],
  endpoints: () => ({}),
});
