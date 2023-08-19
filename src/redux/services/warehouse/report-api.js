import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const reportApi = createApi({
  reducerPath: "reportApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/warehouses/reports",
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
      fetchAllReports: builder.query({
        query: (parameter) => {
          return { method: "GET", url: "/", params: parameter };
        },
      }),
      addReport: builder.mutation({
        query: (data) => {
          return {
            url: "/",
            method: "POST",
            body: data,
          };
        },
      }),
      getReport: builder.query({
        query: (reportId) => {
          return {
            url: `/${reportId}`,
            method: "GET",
          };
        },
      }),
      approveReport: builder.mutation({
        query: (reportId) => {
          return {
            url: `/approve/${reportId}`,
            method: "POST",
          };
        },
      }),
      inspectReport: builder.mutation({
        query: (reportId) => {
          return {
            url: `/inspect/${reportId}`,
            method: "POST",
          };
        },
      }),
      cancelReport: builder.mutation({
        query: (reportId) => {
          return {
            url: `/cancel/${reportId}`,
            method: "POST",
          };
        },
      }),
    };
  },
});

export const {
  useFetchAllReportsQuery,
  useGetReportQuery,
  useAddReportMutation,
  useCancelReportMutation,
  useApproveReportMutation,
  useInspectReportMutation,
} = reportApi;
export default reportApi;
