import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const couponApi = createApi({
  reducerPath: "coupon",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/discounts/coupons",
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
    };
  },
});
export default couponApi;
export const { useGetAllCouponQuery } = couponApi;
