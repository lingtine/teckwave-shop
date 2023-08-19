import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const reviewApi = createApi({
  reducerPath: "review",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/catalogs/reviews",
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
      getReviewByCustomer: builder.query({
        query: (parameters) => {
          return { method: "GET", url: "/customers", params: parameters };
        },
      }),
      addReview: builder.mutation({
        query: (data) => {
          return {
            url: "/",
            method: "POST",
            body: data,
          };
        },
      }),
      getReviewProduct: builder.query({
        query: ([productId, parameters]) => {
          return {
            url: `/reviews/${productId}`,
            method: "GET",
            params: parameters,
          };
        },
      }),
      updateReview: builder.mutation({
        query: ([reviewId, data]) => {
          return {
            url: `/${reviewId}`,
            method: "PUT",
            body: data,
          };
        },
      }),
      deleteReview: builder.mutation({
        query: (reviewId) => {
          return {
            url: `/${reviewId}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useAddReviewMutation,
  useDeleteReviewMutation,
  useGetReviewByCustomerQuery,
  useGetReviewProductQuery,
  useUpdateReviewMutation,
} = reviewApi;
export default reviewApi;
