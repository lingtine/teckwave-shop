import { createApi } from "@reduxjs/toolkit/query/react";
import customerApi from "../customer/customer-api";
import employeeApi from "../employee/employee";
import { changeAuth } from "~/redux/features/auth/auth-slice";
import { setCookie, getCookie } from "cookies-next";
import { logout } from "~/redux/features/auth/auth-slice";
import { logout as userLogout } from "~/redux/features/auth/user-slice";
import { clearData } from "~/redux/features/cart/cart";
import { clearWishList } from "~/redux/features/auth/wish-list-slice";
import jwtDecode from "jwt-decode";
import cartApi from "../orders/cart-api";

import customFetchBase from "~/redux/api/customFetchBase";
const authApi = createApi({
  reducerPath: "auth",
  baseQuery: customFetchBase,
  endpoints(builder) {
    return {
      logout: builder.mutation({
        query: () => {
          return {
            url: "auths/auth/logout",
            method: "POST",
            body: { refreshToken: getCookie("refreshToken") },
          };
        },
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled;
            await dispatch(logout());
            await dispatch(userLogout());
            await dispatch(clearData());
            await dispatch(clearWishList());
          } catch (error) {}
        },
      }),

      login: builder.mutation({
        query: (data) => {
          return {
            url: "auths/auth/login",
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

            if (Array.isArray(jwt.role)) {
              const found = jwt.role.find((el) => {
                return el === "Employee";
              });
              if (found) {
                await setCookie("accessToken", data.accessToken);
                await setCookie("refreshToken", data.refreshToken);
                await dispatch(
                  employeeApi.endpoints.getEmployee.initiate(null)
                );
              }
            } else {
              if (jwt.role === "Customer") {
                await setCookie("accessToken", data.accessToken);
                await setCookie("refreshToken", data.refreshToken);
                await dispatch(
                  customerApi.endpoints.getCustomer.initiate(null)
                );
                await dispatch(cartApi.endpoints.getCartDetail.initiate(null));
              }
            }
          } catch (error) {}
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
