import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const discountEventApi = createApi({
  reducerPath: "discountEventApi",
  baseQuery: customFetchBase,
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
      }),
      createDiscountEvent: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            url: "discounts/discounts/",
            body: data,
          };
        },
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
      }),
      removeDiscountEvent: builder.mutation({
        query: (discountEventId) => {
          return {
            method: "DELETE",
            url: `discounts/discounts/${discountEventId}`,
          };
        },
      }),
      changeStatusDiscountEvent: builder.mutation({
        query: ([discountEventId, status]) => {
          return {
            method: "POST",
            url: `discounts/discounts/${discountEventId}/${status}`,
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
