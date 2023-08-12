import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderApi = createApi({
  reducerPath: "order",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/orders/orders",
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
    };
  },
});

export default orderApi;
export const { useCreateOrderMutation } = orderApi;
