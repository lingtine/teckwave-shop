import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCart } from "~/redux/features/cart/cart";

const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/orders/carts",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authSlice.accessToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (builder) => {
    return {
      getCartDetail: builder.query({
        query: () => {
          return {
            url: "/detail",
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
            url: "/",
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
            url: "/add-items",
            body: data,
          };
        },
      }),
      removeProduct: builder.mutation({
        query: (productId) => {
          return {
            url: `/${productId}`,
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
