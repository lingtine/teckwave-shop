import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: customFetchBase,
  endpoints(builder) {
    return {
      createOrder: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            body: data,
            url: "orders/orders/",
          };
        },
      }),
      getAllOrder: builder.query({
        query: (parameters) => {
          return {
            method: "GET",
            url: "orders/orders/",
            params: parameters,
          };
        },
      }),
      updateStatusOrder: builder.mutation({
        query: (orderId) => {
          return {
            method: "POST",
            url: `orders/orders/process/${orderId}`,
          };
        },
      }),
    };
  },
});

export default orderApi;
export const {
  useCreateOrderMutation,
  useGetAllOrderQuery,
  useUpdateStatusOrderMutation,
} = orderApi;
