import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const brandApi = createApi({
  reducerPath: "brand",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/catalogs/brands",
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
      fetchAllBrands: builder.query({
        query: () => {
          return { method: "GET" };
        },
      }),
      addBrand: builder.mutation({
        query: (data) => {
          return {
            url: "/",
            method: "POST",
            body: data,
          };
        },
      }),
      getBrand: builder.query({
        query: (brandId) => {
          return {
            url: `/${brandId}`,
            method: "GET",
          };
        },
      }),
      updateBrand: builder.mutation({
        query: ([brandId, data]) => {
          return {
            url: `/${brandId}`,
            method: "PUT",
            body: data,
          };
        },
      }),
      deleteBrand: builder.mutation({
        query: (brandId) => {
          return {
            url: `/${brandId}`,
            method: "DELETE",
          };
        },
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
