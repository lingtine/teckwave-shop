import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const couponApi = createApi({
  reducerPath: "coupon",
  baseQuery: customFetchBase,
  endpoints(builder) {
    return {
      getAllCoupon: builder.query({
        query: () => {
          return {
            url: "discounts/coupons/",
            method: "GET",
          };
        },
      }),
      createCoupon: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            url: "discounts/coupons/",
            body: data,
          };
        },
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
      }),
      removeCoupon: builder.mutation({
        query: (couponId) => {
          return {
            method: "DELETE",
            url: `discounts/coupons/${couponId}`,
          };
        },
      }),
      changeStatusCoupon: builder.mutation({
        query: ([couponId, status]) => {
          return {
            method: "POST",
            url: `discounts/coupons/${couponId}/update-status`,
            params: status,
          };
        },
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
