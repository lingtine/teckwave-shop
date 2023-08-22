import { createApi } from "@reduxjs/toolkit/query/react";
import { setCart } from "~/redux/features/cart/cart";
import customFetchBase from "~/redux/api/customFetchBase";
const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => {
    return {
      getCartDetail: builder.query({
        query: () => {
          return {
            url: "orders/carts/detail",
            method: "GET",
          };
        },
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            dispatch(setCart(data.data));
          } catch (error) {}
        },
      }),
      updateProductQuality: builder.mutation({
        query: (data) => {
          return {
            method: "PUT",
            url: "orders/carts/",
            body: {
              ...data,
            },
          };
        },
      }),

      //add pro
      addProduct: builder.mutation({
        query: (data) => {
          return {
            method: "PUT",
            url: "orders/carts/add-items",
            body: data,
          };
        },
      }),
      removeProduct: builder.mutation({
        query: (productId) => {
          return {
            url: `orders/carts/${productId}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export default cartApi;
export const {
  useGetCartDetailQuery,
  useAddProductMutation,
  useUpdateProductQualityMutation,
  useRemoveProductMutation,
} = cartApi;
