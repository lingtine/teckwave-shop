import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";

const productApi = createApi({
  reducerPath: "product",
  baseQuery: customFetchBase,

  tagTypes: ["Post", "Delete", "Update", "Update-Item"],
  endpoints(builder) {
    return {
      getAllProducts: builder.query({
        query: (parameter) => {
          return {
            url: "catalogs/products/",
            method: "GET",
            params: parameter,
          };
        },
        providesTags: ["Post", "Delete", "Update"],
      }),
      getAllProductsByParameter: builder.mutation({
        query: (parameter) => {
          return {
            url: "catalogs/products/",
            method: "GET",
            params: parameter,
          };
        },
      }),
      searchProducts: builder.mutation({
        query: (value) => {
          return {
            url: "catalogs/products/",
            method: "GET",
            params: { Keyword: value },
          };
        },
      }),
      addProduct: builder.mutation({
        query: (product) => {
          return {
            method: "POST",
            url: "catalogs/products/",
            body: product,
          };
        },
        invalidatesTags: ["Post"],
      }),
      deleteProduct: builder.mutation({
        query: (productId) => {
          return {
            method: "DELETE",
            url: `catalogs/products/${productId}`,
          };
        },
        invalidatesTags: ["Delete"],
      }),

      //clientPage change the view
      getProductDetail: builder.query({
        query: (productId) => {
          return {
            method: "GET",
            url: `catalogs/products/details/${productId}`,
          };
        },
        providesTags: ["Update-Item"],
      }),

      //admin page
      getProduct: builder.query({
        query: (productId) => {
          return {
            method: "GET",
            url: `catalogs/products/${productId}`,
          };
        },
        providesTags: ["Update-Item"],
      }),
      updateProduct: builder.mutation({
        query: ([productId, data]) => {
          return {
            method: "PUT",
            url: `catalogs/products/${productId}`,
            body: data,
          };
        },
        invalidatesTags: ["Update"],
      }),
      getProductsHomePage: builder.query({
        query: () => {
          return {
            url: "catalogs/products/home",
            method: "GET",
          };
        },
      }),
      getListProductsById: builder.query({
        query: (data) => {
          return {
            url: "catalogs/products/list",
            method: "POST",
            body: {
              ids: data,
            },
          };
        },
      }),
      restoreProduct: builder.mutation({
        query: (id) => {
          return {
            method: "GET",
            url: `catalogs/products/${id}/restore`,
          };
        },
      }),
      changeProductStatus: builder.mutation({
        query: ([id, status]) => {
          return {
            url: `catalogs/products/${id}/changeStatus/${status}`,
            method: "GET",
          };
        },
      }),
      // Specification product
      addSpecification: builder.mutation({
        query: ([productId, data]) => {
          return {
            url: `catalogs/products/${productId}/add-specifications`,
            body: data,
            method: "POST",
          };
        },
        invalidatesTags: ["Update-Item"],
      }),
      updateSpecification: builder.mutation({
        query: ([productId, data]) => {
          return {
            url: `catalogs/products/${productId}/update-specifications`,
            body: data,
            method: "POST",
          };
        },
      }),
      removeSpecification: builder.mutation({
        query: ([productId, data]) => {
          return {
            url: `catalogs/products/${productId}/remove-specifications`,
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
            url: `catalogs/products/${productId}/upload-images`,
            body: data,
          };
        },
      }),
      removeImage: builder.mutation({
        query: (imageId) => {
          return {
            method: "PUT",
            url: "catalogs/products/remove-images",
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
  useGetAllProductsByParameterMutation,
  useGetListProductsByIdQuery,
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
