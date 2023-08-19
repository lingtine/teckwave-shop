import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/catalogs/products",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authSlice.accessToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),

  tagTypes: ["Post", "Delete", "Update"],
  endpoints(builder) {
    return {
      getAllProducts: builder.query({
        query: () => {
          return {
            url: "/",
            method: "GET",
          };
        },
        providesTags: ["Post", "Delete", "Update"],
      }),
      searchProducts: builder.mutation({
        query: (value) => {
          return {
            url: "/",
            method: "GET",
            params: { Keyword: value },
          };
        },
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

      //clientPage change the view
      getProductDetail: builder.query({
        query: (productId) => {
          return {
            method: "GET",
            url: `/details/${productId}`,
          };
        },
      }),

      //admin page
      getProduct: builder.query({
        query: (productId) => {
          return {
            method: "GET",
            url: `/${productId}`,
          };
        },
      }),
      updateProduct: builder.mutation({
        query: ([productId, data]) => {
          return {
            method: "PUT",
            url: `/${productId}`,
            body: data,
          };
        },
        invalidatesTags: ["Update"],
      }),
      getProductsHomePage: builder.query({
        query: () => {
          return {
            url: "/home",
            method: "GET",
          };
        },
      }),
      restoreProduct: builder.mutation({
        query: (id) => {
          return {
            method: "GET",
            url: `/${id}/restore`,
          };
        },
      }),
      changeProductStatus: builder.mutation({
        query: ([id, status]) => {
          return {
            url: `/${id}/changeStatus/${status}`,
            method: "GET",
          };
        },
      }),
      // Specification product
      addSpecification: builder.mutation({
        query: ([productId, data]) => {
          return {
            url: `/${productId}/add-specifications`,
            body: data,
            method: "POST",
          };
        },
      }),
      updateSpecification: builder.mutation({
        query: ([productId, data]) => {
          return {
            url: `/${productId}/update-specifications`,
            body: data,
            method: "POST",
          };
        },
      }),
      removeSpecification: builder.mutation({
        query: ([productId, data]) => {
          return {
            url: `/${productId}/remove-specifications`,
            body: data,
            method: "POST",
          };
        },
      }),

      // product image
      addProductImages: builder.mutation({
        query: ([productId, data]) => {
          return {
            method: "POST",
            url: `/${productId}/upload-images`,
            body: data,
          };
        },
      }),
      removeImage: builder.mutation({
        query: (imageId) => {
          return {
            method: "PUT",
            url: "/remove-images",
            body: imageId,
          };
        },
      }),
    };
  },
});

export const {
  //products
  useGetAllProductsQuery,
  useSearchProductsMutation,
  //product
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetProductQuery,
  useGetProductDetailQuery,
  useRestoreProductMutation,
  useChangeProductStatusMutation,

  //home page
  useGetProductsHomePageQuery,
  //product Image
  useAddProductImagesMutation,
  useRemoveImageMutation,
  //specification
  useAddSpecificationMutation,
  useRemoveSpecificationMutation,
  useUpdateSpecificationMutation,
} = productApi;
export default productApi;
