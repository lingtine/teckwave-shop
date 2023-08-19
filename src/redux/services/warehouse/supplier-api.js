import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const supplierApi = createApi({
  reducerPath: "supplierApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/warehouses/suppliers",
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
      fetchAllSuppliers: builder.query({
        query: () => {
          return { method: "GET", url: "/" };
        },
      }),
      addSupplier: builder.mutation({
        query: (data) => {
          return {
            url: "/",
            method: "POST",
            body: data,
          };
        },
      }),
      getSupplier: builder.query({
        query: (supplierId) => {
          return {
            url: `/${supplierId}`,
            method: "GET",
          };
        },
      }),
      updateSupplier: builder.mutation({
        query: ([supplierId, data]) => {
          return {
            url: `/${supplierId}`,
            method: "PUT",
            body: data,
          };
        },
      }),
      removeSupplier: builder.mutation({
        query: (supplierId) => {
          return {
            url: `/${supplierId}`,
            method: "DELETE",
          };
        },
      }),
      restoreSupplier: builder.mutation({
        query: (supplierId) => {
          return {
            url: `/restore/${supplierId}`,
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
