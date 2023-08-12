import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/auths/auth",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken;
      if (token) {
        // include token in req header
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),

  endpoints(builder) {
    return {
      register: builder.mutation({
        query: (data) => {
          return {
            url: "/register",
            method: "POST",
            body: data,
          };
        },
      }),

      login: builder.mutation({
        query: (data) => {
          return {
            url: "/login",
            method: "POST",
            body: data,
          };
        },
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled;
            await dispatch(userApi.endpoints.getMe.initiate(null));
          } catch (error) {}
        },
      }),
      verifyEmail: builder.mutation({
        query: (email) => {
          return {
            url: `/verify-email/${email}`,
            method: "GET",
          };
        },
      }),
      verifyCode: builder.mutation({
        query: (email, code) => {
          return {
            url: `/verify-code/${email}/${code}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export default authApi;
export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyCodeMutation,
  useVerifyEmailMutation,
} = authApi;
