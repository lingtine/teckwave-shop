import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const couponApi = createApi({
  reducerPath: "coupon",
  baseQuery: customFetchBase,
  tagTypes: ["create", "update", "remove"],
  endpoints(builder) {
    return {
      getAllCoupon: builder.query({
        query: () => {
          return {
            url: "discounts/coupons/",
            method: "GET",
          };
        },
        providesTags: ["create", "remove", "update"],
      }),
      createCoupon: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            url: "discounts/coupons/",
            body: data,
          };
        },
        invalidatesTags: ["create"],
      }),
      getCoupon: builder.query({
        query: (couponId) => {
          return {
            method: "GET",
            url: `discounts/coupons/${couponId}`,
          };
        },
      }),
      updateCoupon: builder.mutation({
        query: ([couponId, data]) => {
          return {
            method: "PUT",
            url: `discounts/coupons/${couponId}`,
            body: data,
          };
        },
        invalidatesTags: ["update"],
      }),
      removeCoupon: builder.mutation({
        query: (couponId) => {
          return {
            method: "DELETE",
            url: `discounts/coupons/${couponId}`,
          };
        },
        invalidatesTags: ["remove"],
      }),
      changeStatusCoupon: builder.mutation({
        query: ([couponId, status]) => {
          return {
            method: "PUT",
            url: `discounts/coupons/${couponId}/update-status`,
            params: status,
          };
        },
        invalidatesTags: ["update"],
      }),
    };
  },
});
export default couponApi;
export const {
  useGetAllCouponQuery,
  useChangeStatusCouponMutation,
  useCreateCouponMutation,
  useGetCouponQuery,
  useRemoveCouponMutation,
  useUpdateCouponMutation,
} = couponApi;
