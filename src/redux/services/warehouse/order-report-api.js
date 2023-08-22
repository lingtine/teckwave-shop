import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const orderReportApi = createApi({
  reducerPath: "orderReportApi",
  baseQuery: customFetchBase,
  endpoints(builder) {
    return {
      getOrderReports: builder.query({
        query: (parameter) => {
          return {
            method: "GET",
            url: "warehouses/order-reports/",
            params: parameter,
          };
        },
      }),
      getOrderReport: builder.mutation({
        query: (orderReportId) => {
          return {
            url: `warehouses/order-reports/${orderReportId}`,
            method: "POST",
          };
        },
      }),
    };
  },
});

export const { useGetOrderReportMutation, useGetOrderReportsQuery } =
  orderReportApi;
export default orderReportApi;
