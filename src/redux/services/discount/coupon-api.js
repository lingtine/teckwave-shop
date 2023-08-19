import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const couponApi = createApi({
  reducerPath: "coupon",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/discounts/coupons",
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
      getAllCoupon: builder.query({
        query: () => {
          return {
            method: "GET",
          };
        },
      }),
      createCoupon: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            url: "/",
            body: data,
          };
        },
      }),
      getCoupon: builder.query({
        query: (couponId) => {
          return {
            method: "GET",
            url: `/${couponId}`,
          };
        },
      }),
      updateCoupon: builder.mutation({
        query: ([couponId, data]) => {
          return {
            method: "PUT",
            url: `/${couponId}`,
            body: data,
          };
        },
      }),
      removeCoupon: builder.mutation({
        query: (couponId) => {
          return {
            method: "DELETE",
            url: `/${couponId}`,
          };
        },
      }),
      changeStatusCoupon: builder.mutation({
        query: ([couponId, status]) => {
          return {
            method: "POST",
            url: `/${couponId}/update-status`,
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
