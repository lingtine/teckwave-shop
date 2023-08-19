import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const warehouserApi = createApi({
  reducerPath: "warehouserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/warehouses/warehousers",
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
      fetchAllWarehousers: builder.query({
        query: (parameter) => {
          return { method: "GET", url: "/", params: parameter };
        },
      }),
      addWarehouser: builder.mutation({
        query: (data) => {
          return {
            url: "/",
            method: "POST",
            body: data,
          };
        },
      }),
      getWarehouser: builder.query({
        query: (warehouserId) => {
          return {
            url: `/${warehouserId}`,
            method: "GET",
          };
        },
      }),
      updateWarehouser: builder.mutation({
        query: ([warehouserId, data]) => {
          return {
            url: `/${warehouserId}`,
            method: "PUT",
            body: data,
          };
        },
      }),
      removeWarehouser: builder.mutation({
        query: (warehouserId) => {
          return {
            url: `/${warehouserId}`,
            method: "DELETE",
          };
        },
      }),
      restoreWarehouser: builder.mutation({
        query: (warehouserId) => {
          return {
            url: `/restore/${warehouserId}`,
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
