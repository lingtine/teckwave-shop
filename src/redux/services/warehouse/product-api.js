import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const warehouseProductsApi = createApi({
  reducerPath: "warehouseProductsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/warehouses/wasehouse-products",
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
      fetchAllWarehouseProducts: builder.query({
        query: (parameter) => {
          return { method: "GET", url: "/", params: parameter };
        },
      }),
      getWarehouseProducts: builder.query({
        query: (warehouseProductsId) => {
          return {
            url: `/${warehouseProductsId}`,
            method: "GET",
          };
        },
      }),
      getWarehouseProductsBySKU: builder.query({
        query: (sku) => {
          return {
            url: `/sku/${sku}`,
            method: "GET",
          };
        },
      }),
      removeWarehouseProducts: builder.mutation({
        query: (warehouseProductsId) => {
          return {
            url: `/${warehouseProductsId}`,
            method: "DELETE",
          };
        },
      }),
      restoreWarehouseProducts: builder.mutation({
        query: (warehouseProductsId) => {
          return {
            url: `/restore/${warehouseProductsId}`,
            method: "PUT",
          };
        },
      }),
    };
  },
});

export const {
  useFetchAllWarehouseProductsQuery,
  useGetWarehouseProductsBySKUQuery,
  useGetWarehouseProductsQuery,
  useRemoveWarehouseProductsMutation,
  useRestoreWarehouseProductsMutation,
} = warehouseProductsApi;
export default warehouseProductsApi;
