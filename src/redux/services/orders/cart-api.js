import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cartApi = createApi({
  reducerPath: "cart",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecommerce.hahaho.me/orders",
  }),
  endpoints: (builder) => {
    return {
      addProduct: builder.mutation({
        query: () => {
          return {
            url: "/orders",
            body: [{}],
          };
        },
      }),
      getCart: builder.query({
        query: (customerId) => {
          return {
            url: `/customers/${customerId}`,
          };
        },
      }),
    };
  },
});

export default cartApi;
export const { useGetCartQuery, useAddProductMutation } = cartApi;