import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import customerApi from "../customer/customer-api";
import employeeApi from "../employee/employee";
import { changeAuth } from "~/redux/features/auth/auth-slice";
import { getCookie, setCookie } from "~/utils/cookie";
import { logout } from "~/redux/features/auth/auth-slice";
import { logout as userLogout } from "~/redux/features/auth/user-slice";
import jwtDecode from "jwt-decode";
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
      logout: builder.mutation({
        query: () => {
          return {
            url: "/logout",
            method: "POST",
            body: { refreshToken: getCookie("refreshToken") },
          };
        },
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled;
            await dispatch(logout());
            await dispatch(userLogout());
          } catch (error) {}
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
            let jwt = jwtDecode(data.accessToken);
            if (jwt.role === "Customer") {
              await setCookie("accessToken", data.accessToken);
              await setCookie("refreshToken", data.refreshToken);
              await dispatch(customerApi.endpoints.getCustomer.initiate(null));
            } else if (jwt.role === "Employee") {
              await setCookie("accessToken", data.accessToken);
              await setCookie("refreshToken", data.refreshToken);
              await dispatch(employeeApi.endpoints.getEmployee.initiate(null));
            }
          } catch (error) {}
        },
      }),
      refreshToken: builder.mutation({
        query: () => {
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
      register: builder.mutation({
        query: (data) => {
          return {
            url: "/register",
            method: "POST",
            body: data,
          };
        },
      }),
      createEmployee: builder.mutation({
        query: (data) => {
          return {
            url: "/create-employee",
            method: "POST",
            body: data,
          };
        },
      }),
      createAdmin: builder.mutation({
        query: (data) => {
          return {
            url: "/create-admin",
            method: "POST",
            body: data,
          };
        },
      }),
    };
  },
});

export default authApi;
export const {
  useLoginMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
  useRegisterMutation,
  useCreateAdminMutation,
  useCreateEmployeeMutation,
} = authApi;
