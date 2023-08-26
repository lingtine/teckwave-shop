import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const supplierApi = createApi({
  reducerPath: "supplierApi",
  baseQuery: customFetchBase,
  tagTypes: ["create", "update", "remove"],
  endpoints(builder) {
    return {
      fetchAllSuppliers: builder.query({
        query: (parameters) => {
          return {
            method: "GET",
            url: "warehouses/suppliers/",
            params: parameters,
          };
        },
        providesTags: ["create", "update", "remove"],
      }),
      addSupplier: builder.mutation({
        query: (data) => {
          return {
            url: "warehouses/suppliers/",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["create"],
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
        invalidatesTags: ["update"],
      }),
      removeSupplier: builder.mutation({
        query: (supplierId) => {
          return {
            url: `warehouses/suppliers/${supplierId}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["remove"],
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
