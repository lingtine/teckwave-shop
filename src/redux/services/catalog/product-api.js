import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/catalogs/products",
  }),
  tagTypes: ["Post", "Delete", "Update"],
  endpoints(builder) {
    return {
      getAllProducts: builder.query({
        query: () => {
          return {
            method: "GET",
          };
        },
        providesTags: ["Post", "Delete", "Update"],
      }),
      addProduct: builder.mutation({
        query: (product) => {
          return {
            method: "POST",
            body: product,
          };
        },
        invalidatesTags: ["Post"],
      }),
      deleteProduct: builder.mutation({
        query: (productId) => {
          return {
            method: "DELETE",
            url: `/${productId}`,
          };
        },
        invalidatesTags: ["Delete"],
      }),
      getProduct: builder.query({
        query: (productId) => {
          return {
            method: "GET",
            url: `/details/${productId}`,
          };
        },
      }),
      updateProduct: builder.mutation({
        query: (product) => {
          return {
            method: "PUT",
            url: `/${product.id}`,
            body: {
              name: product.name,
              description: product.description,
              unitPrice: product.price,
            },
          };
        },
        invalidatesTags: ["Update"],
      }),
    };
  },
});

export const {
  //products
  useGetAllProductsQuery,

  //product
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetProductQuery,
} = productApi;
export { productApi };
