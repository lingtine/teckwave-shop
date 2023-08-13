import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import customerApi from "../customer/customer-api";
import { changeAuth } from "~/redux/features/auth/auth-slice";
import { getCookie, setCookie } from "~/utils/cookie";
import { logout } from "~/redux/features/auth/auth-slice";
import { logout as userLogout } from "~/redux/features/auth/user-slice";

const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/auths/auth",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authSlice.accessToken;
      if (token) {
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
        transformResponse: ({ data }) => {
          return {
            ...data,
          };
        },
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            await dispatch(changeAuth(data));
            await setCookie("accessToken", data.accessToken);
            await setCookie("refreshToken", data.refreshToken);
            await dispatch(customerApi.endpoints.getCustomer.initiate(null));
          } catch (error) {}
        },
      }),
      refreshToken: builder.mutation({
        query: (refreshToken) => {
          return {
            url: "/refresh-token",
            method: "POST",
            body: { refreshToken: getCookie("refreshToken") },
          };
        },
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            await dispatch(changeAuth(data.data));
            await setCookie("accessToken", data.data.accessToken);
            await setCookie("refreshToken", data.data.refreshToken);
            await dispatch(customerApi.endpoints.getCustomer.initiate(null));
          } catch (error) {
            await dispatch(logout());
            await dispatch(userLogout());
          }
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
