import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "~/redux/features/auth/user-slice";
import authApi from "../authentication/auth-api";
const employeeApi = createApi({
  reducerPath: "employee",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/employees/employees",
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
      getEmployee: builder.query({
        query: () => {
          return {
            method: "GET",
            url: `/detail`,
          };
        },
        async onQueryStarted(args, { dispatch, queryFulfilled, getState }) {
          try {
            const { data } = await queryFulfilled;
            await dispatch(setUser(data.data));
          } catch (error) {
            await dispatch(authApi.endpoints.refreshToken.initiate(null));
          }
        },
      }),
    };
  },
});

export const { useGetEmployeeQuery } = employeeApi;
export default employeeApi;
