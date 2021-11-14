// Need to use the React-specific entry point to import createApi
import {
  createApi,
  BaseQueryFn,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

// const getAuthQuery: BaseQueryFn<void, unknown> = () => {
//   return {}
// };

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/auth/", mode: "no-cors" }),
  endpoints: (builder) => ({
    getTwitterAuth: builder.query({
      query: () => `twitter/`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTwitterAuthQuery } = authApi;
