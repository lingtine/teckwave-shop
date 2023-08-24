import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const warehouserApi = createApi({
  reducerPath: "warehouserApi",
  baseQuery: customFetchBase,
  tagTypes: ["remove", "update", "create"],
  endpoints(builder) {
    return {
      fetchAllWarehousers: builder.query({
        query: (parameter) => {
          return {
            method: "GET",
            url: "warehouses/warehouses/",
            params: parameter,
          };
        },
        providesTags: ["create", "remove", "update"],
      }),
      addWarehouser: builder.mutation({
        query: (data) => {
          return {
            url: "warehouses/warehouses/",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["create"],
      }),
      getWarehouser: builder.query({
        query: (warehouserId) => {
          return {
            url: `warehouses/warehouses/${warehouserId}`,
            method: "GET",
          };
        },
      }),
      updateWarehouser: builder.mutation({
        query: ([warehouserId, data]) => {
          return {
            url: `warehouses/warehouses/${warehouserId}`,
            method: "PUT",
            body: data,
          };
        },
        invalidatesTags: ["update"],
      }),
      removeWarehouser: builder.mutation({
        query: (warehouserId) => {
          return {
            url: `warehouses/warehouses/${warehouserId}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["remove"],
      }),
      restoreWarehouser: builder.mutation({
        query: (warehouserId) => {
          return {
            url: `warehouses/warehouses/restore/${warehouserId}`,
            method: "PUT",
          };
        },
      }),
    };
  },
});

export const {
  useAddWarehouserMutation,
  useFetchAllWarehousersQuery,
  useGetWarehouserQuery,
  useRemoveWarehouserMutation,
  useUpdateWarehouserMutation,
  useRestoreWarehouserMutation,
} = warehouserApi;
export default warehouserApi;
