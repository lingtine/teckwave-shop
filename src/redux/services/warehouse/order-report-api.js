import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderReportApi = createApi({
  reducerPath: "orderReportApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/warehouses/order-reports",
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
      getOrderReports: builder.query({
        query: (parameter) => {
          return { method: "GET", url: "/", params: parameter };
        },
      }),
      getOrderReport: builder.mutation({
        query: (orderReportId) => {
          return {
            url: `/cancel/${orderReportId}`,
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
