import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/orders/orders",
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
      createOrder: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            body: data,
          };
        },
      }),
      getAllOrder: builder.query({
        query: (parameters) => {
          return {
            method: "GET",
            url: "/",
            params: parameters,
          };
        },
      }),
      updateStatusOrder: builder.mutation({
        query: (orderId) => {
          return {
            method: "POST",
            url: `/process/${orderId}`,
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
