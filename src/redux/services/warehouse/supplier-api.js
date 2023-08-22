import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const supplierApi = createApi({
  reducerPath: "supplierApi",
  baseQuery: customFetchBase,
  endpoints(builder) {
    return {
      fetchAllSuppliers: builder.query({
        query: () => {
          return { method: "GET", url: "warehouses/suppliers/" };
        },
      }),
      addSupplier: builder.mutation({
        query: (data) => {
          return {
            url: "warehouses/suppliers/",
            method: "POST",
            body: data,
          };
        },
      }),
      getSupplier: builder.query({
        query: (supplierId) => {
          return {
            url: `warehouses/suppliers/${supplierId}`,
            method: "GET",
          };
        },
      }),
      updateSupplier: builder.mutation({
        query: ([supplierId, data]) => {
          return {
            url: `warehouses/suppliers/${supplierId}`,
            method: "PUT",
            body: data,
          };
        },
      }),
      removeSupplier: builder.mutation({
        query: (supplierId) => {
          return {
            url: `warehouses/suppliers/${supplierId}`,
            method: "DELETE",
          };
        },
      }),
      restoreSupplier: builder.mutation({
        query: (supplierId) => {
          return {
            url: `warehouses/suppliers/restore/${supplierId}`,
            method: "PUT",
          };
        },
      }),
    };
  },
});

export const {
  useAddSupplierMutation,
  useFetchAllSuppliersQuery,
  useGetSupplierQuery,
  useRemoveSupplierMutation,
  useRestoreSupplierMutation,
  useUpdateSupplierMutation,
} = supplierApi;
export default supplierApi;
