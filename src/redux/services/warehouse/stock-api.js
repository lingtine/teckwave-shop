import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const stockApi = createApi({
  reducerPath: "stockApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/warehouses/product-instock",
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
      fetchAllProductInStocks: builder.query({
        query: () => {
          return { method: "GET", url: "/" };
        },
      }),
      addProductInStock: builder.mutation({
        query: (data) => {
          return {
            url: "/",
            method: "POST",
            body: data,
          };
        },
      }),
      getProductInStock: builder.query({
        query: (productInStockId) => {
          return {
            url: `/${productInStockId}`,
            method: "GET",
          };
        },
      }),
      updateProductInStock: builder.mutation({
        query: ([productInStockId, data]) => {
          return {
            url: `/${productInStockId}`,
            method: "PUT",
            body: data,
          };
        },
      }),
      removeProductInStock: builder.mutation({
        query: (productInStockId) => {
          return {
            url: `/${productInStockId}`,
            method: "DELETE",
          };
        },
      }),
      restoreProductInStock: builder.mutation({
        query: (productInStockId) => {
          return {
            url: `/restore/${productInStockId}`,
            method: "PUT",
          };
        },
      }),
      getProductStockInWarehouse: builder.query({
        query: ([productId, warehouseId]) => {
          return {
            url: `/${warehouseId}/${productId}`,
            method: "GET",
          };
        },
      }),
      getProductStock: builder.query({
        query: (productId) => {
          return {
            url: `/products/${productId}`,
            method: "GET",
          };
        },
      }),
      getProductsStockInWarehouse: builder.query({
        query: (warehouseId) => {
          return {
            url: `/warehouses/${warehouseId}`,
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
