import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const warehouseProductsApi = createApi({
  reducerPath: "warehouseProductsApi",
  baseQuery: customFetchBase,
  endpoints(builder) {
    return {
      fetchAllWarehouseProducts: builder.query({
        query: (parameter) => {
          return {
            method: "GET",
            url: "warehouses/warehouse-products/",
            params: parameter,
          };
        },
      }),
      getWarehouseProducts: builder.query({
        query: (warehouseProductsId) => {
          return {
            url: `warehouses/warehouse-products/${warehouseProductsId}`,
            method: "GET",
          };
        },
      }),
      getWarehouseProductsBySKU: builder.query({
        query: (sku) => {
          return {
            url: `warehouses/warehouse-products/sku/${sku}`,
            method: "GET",
          };
        },
      }),
      removeWarehouseProducts: builder.mutation({
        query: (warehouseProductsId) => {
          return {
            url: `warehouses/warehouse-products/${warehouseProductsId}`,
            method: "DELETE",
          };
        },
      }),
      restoreWarehouseProducts: builder.mutation({
        query: (warehouseProductsId) => {
          return {
            url: `warehouses/warehouse-products/restore/${warehouseProductsId}`,
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
