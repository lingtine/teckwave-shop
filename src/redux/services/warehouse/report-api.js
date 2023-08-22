import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const reportApi = createApi({
  reducerPath: "reportApi",
  baseQuery: customFetchBase,
  endpoints(builder) {
    return {
      fetchAllReports: builder.query({
        query: (parameter) => {
          return {
            method: "GET",
            url: "warehouses/reports/",
            params: parameter,
          };
        },
      }),
      addReport: builder.mutation({
        query: (data) => {
          return {
            url: "warehouses/reports/",
            method: "POST",
            body: data,
          };
        },
      }),
      getReport: builder.query({
        query: (reportId) => {
          return {
            url: `warehouses/reports/${reportId}`,
            method: "GET",
          };
        },
      }),
      approveReport: builder.mutation({
        query: (reportId) => {
          return {
            url: `warehouses/reports/approve/${reportId}`,
            method: "POST",
          };
        },
      }),
      inspectReport: builder.mutation({
        query: (reportId) => {
          return {
            url: `warehouses/reports/inspect/${reportId}`,
            method: "POST",
          };
        },
      }),
      cancelReport: builder.mutation({
        query: (reportId) => {
          return {
            method: "POST",
            url: `warehouses/reports/cancel/${reportId}/`,
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
