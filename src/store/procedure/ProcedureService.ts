import { ApiSlice } from '../../api/ApiSlice';

export const extendedApiSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    procedure: builder.mutation({
      query: (start) => ({
        url: '/sanatorium/get-doctor-schedule/',
        method: 'POST',
        body: start,
        headers: { 'Content-Type': 'application/json' },
      }),
    }),
  }),
});
export const { useProcedureMutation } = extendedApiSlice;
