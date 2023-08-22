import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const stockApi = createApi({
  reducerPath: "stockApi",
  baseQuery: customFetchBase,
  endpoints(builder) {
    return {
      fetchAllProductInStocks: builder.query({
        query: () => {
          return { method: "GET", url: "warehouses/product-instock/" };
        },
      }),
      addProductInStock: builder.mutation({
        query: (data) => {
          return {
            url: "warehouses/product-instock/",
            method: "POST",
            body: data,
          };
        },
      }),
      getProductInStock: builder.query({
        query: (productInStockId) => {
          return {
            url: `warehouses/product-instock/${productInStockId}`,
            method: "GET",
          };
        },
      }),
      updateProductInStock: builder.mutation({
        query: ([productInStockId, data]) => {
          return {
            url: `warehouses/product-instock/${productInStockId}`,
            method: "PUT",
            body: data,
          };
        },
      }),
      removeProductInStock: builder.mutation({
        query: (productInStockId) => {
          return {
            url: `warehouses/product-instock/${productInStockId}`,
            method: "DELETE",
          };
        },
      }),
      restoreProductInStock: builder.mutation({
        query: (productInStockId) => {
          return {
            url: `warehouses/product-instock/restore/${productInStockId}`,
            method: "PUT",
          };
        },
      }),
      getProductStockInWarehouse: builder.query({
        query: ([productId, warehouseId]) => {
          return {
            url: `warehouses/product-instock/${warehouseId}/${productId}`,
            method: "GET",
          };
        },
      }),
      getProductStock: builder.query({
        query: (productId) => {
          return {
            url: `warehouses/product-instock/products/${productId}`,
            method: "GET",
          };
        },
      }),
      getProductsStockInWarehouse: builder.query({
        query: (warehouseId) => {
          return {
            url: `warehouses/product-instock/warehouses/${warehouseId}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useAddProductInstockMutation,
  useFetchAllWarehousersQuery,
  useGetWarehouserQuery,
  useRemoveWarehouserMutation,
  useUpdateWarehouserMutation,
  useRestoreWarehouserMutation,
} = stockApi;
export default stockApi;
