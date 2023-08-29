import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";

const discountEventApi = createApi({
  reducerPath: "discountEventApi",
  baseQuery: customFetchBase,
  tagTypes: ["create", "update", "remove", "update-status"],
  endpoints(builder) {
    return {
      getAllDiscountEvent: builder.query({
        query: (parameters) => {
          return {
            method: "GET",
            url: "discounts/discounts/",
            params: parameters,
          };
        },
        providesTags: ["create", "update", "remove", "update-status"],
      }),
      createDiscountEvent: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            url: "discounts/discounts/",
            body: data,
          };
        },
        invalidatesTags: ["create"],
      }),
      getDiscountEvent: builder.query({
        query: (discountEventId) => {
          return {
            method: "GET",
            url: `discounts/discounts/${discountEventId}`,
          };
        },
      }),
      updateDiscountEvent: builder.mutation({
        query: ([discountEventId, data]) => {
          return {
            method: "PUT",
            url: `discounts/discounts/${discountEventId}`,
            body: data,
          };
        },
        invalidatesTags: ["update"],
      }),
      removeDiscountEvent: builder.mutation({
        query: (discountEventId) => {
          return {
            method: "DELETE",
            url: `discounts/discounts/${discountEventId}`,
          };
        },
        invalidatesTags: ["remove"],
      }),
      changeStatusDiscountEvent: builder.mutation({
        query: ([discountEventId, status]) => {
          return {
            method: "PATCH",
            url: `discounts/discounts/${discountEventId}/${status}`,
          };
        },
        invalidatesTags: ["update-status"],
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
