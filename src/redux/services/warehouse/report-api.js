import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const reportApi = createApi({
  reducerPath: "reportApi",
  baseQuery: customFetchBase,
  tagTypes: ["post", "update", "approve", "inspect", "cancel"],
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
        providesTags: ["post", "update", "approve", "inspect", "cancel"],
      }),
      addReport: builder.mutation({
        query: (data) => {
          return {
            url: "warehouses/reports/",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["post"],
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
        invalidatesTags: ["approve"],
      }),
      inspectReport: builder.mutation({
        query: (reportId) => {
          return {
            url: `warehouses/reports/inspect/${reportId}`,
            method: "POST",
          };
        },
        invalidatesTags: ["inspect"],
      }),
      cancelReport: builder.mutation({
        query: (reportId) => {
          return {
            method: "POST",
            url: `warehouses/reports/cancel/${reportId}/`,
          };
        },
        invalidatesTags: ["cancel"],
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
