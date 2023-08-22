import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const brandApi = createApi({
  reducerPath: "brand",
  baseQuery: customFetchBase,
  tagTypes: ["Post", "Delete", "Update"],
  endpoints(builder) {
    return {
      fetchAllBrands: builder.query({
        query: () => {
          return {
            url: "catalogs/brands/",
            method: "GET",
          };
        },
        providesTags: ["Post", "Delete", "Update"],
      }),
      addBrand: builder.mutation({
        query: (data) => {
          return {
            url: "catalogs/brands/",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["Post"],
      }),
      getBrand: builder.query({
        query: (brandId) => {
          return {
            url: `catalogs/brands/${brandId}`,
            method: "GET",
          };
        },
      }),
      updateBrand: builder.mutation({
        query: ([brandId, data]) => {
          return {
            url: `catalogs/brands/${brandId}`,
            method: "PUT",
            body: data,
          };
        },
        invalidatesTags: ["Update"],
      }),
      deleteBrand: builder.mutation({
        query: (brandId) => {
          return {
            url: `catalogs/brands/${brandId}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["Delete"],
      }),
    };
  },
});

export const {
  useFetchAllBrandsQuery,
  useAddBrandMutation,
  useDeleteBrandMutation,
  useGetBrandQuery,
  useUpdateBrandMutation,
} = brandApi;
export default brandApi;
