import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const discountEventApi = createApi({
  reducerPath: "discountEventApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/discounts/discounts",
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
      getAllDiscountEvent: builder.query({
        query: (parameters) => {
          return {
            method: "GET",
            url: "/",
            params: parameters,
          };
        },
      }),
      createDiscountEvent: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            url: "/",
            body: data,
          };
        },
      }),
      getDiscountEvent: builder.query({
        query: (discountEventId) => {
          return {
            method: "GET",
            url: `/${discountEventId}`,
          };
        },
      }),
      updateDiscountEvent: builder.mutation({
        query: ([discountEventId, data]) => {
          return {
            method: "PUT",
            url: `/${discountEventId}`,
            body: data,
          };
        },
      }),
      removeDiscountEvent: builder.mutation({
        query: (discountEventId) => {
          return {
            method: "DELETE",
            url: `/${discountEventId}`,
          };
        },
      }),
      changeStatusDiscountEvent: builder.mutation({
        query: ([discountEventId, status]) => {
          return {
            method: "POST",
            url: `/${discountEventId}/${status}`,
          };
        },
      }),
    };
  },
});
export default discountEventApi;
export const {
  useChangeStatusDiscountEventMutation,
  useCreateDiscountEventMutation,
  useGetAllDiscountEventQuery,
  useGetDiscountEventQuery,
  useRemoveDiscountEventMutation,
  useUpdateDiscountEventMutation,
} = discountEventApi;
