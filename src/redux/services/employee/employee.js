import { createApi } from "@reduxjs/toolkit/query/react";
import { setUser } from "~/redux/features/auth/user-slice";
import customFetchBase from "~/redux/api/customFetchBase";
const employeeApi = createApi({
  reducerPath: "employee",
  baseQuery: customFetchBase,
  tagTypes: ["User"],
  endpoints(builder) {
    return {
      getEmployee: builder.query({
        query: () => {
          return {
            method: "GET",
            url: "employees/employees/detail",
          };
        },
        async onQueryStarted(args, { dispatch, queryFulfilled, getState }) {
          try {
            const { data } = await queryFulfilled;
            await dispatch(setUser(data.data));
          } catch (error) {}
        },
      }),
      getEmployeeByMu: builder.mutation({
        query: () => {
          return {
            method: "GET",
            url: "employees/employees/detail",
          };
        },
        async onQueryStarted(args, { dispatch, queryFulfilled, getState }) {
          try {
            const { data } = await queryFulfilled;
            await dispatch(setUser(data.data));
          } catch (error) {}
        },
      }),
      createAdmin: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            url: "employees/employees/create-admin",
            body: data,
          };
        },
      }),
      createEmployee: builder.mutation({
        query: (data) => {
          return {
            method: "GET",
            url: "employees/employees/create-employee",
            body: data,
          };
        },
      }),
    };
  },
});

export const { useGetEmployeeQuery, useGetEmployeeByMuMutation } = employeeApi;
export default employeeApi;
