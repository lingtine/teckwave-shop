import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const reviewApi = createApi({
  reducerPath: "review",
  baseQuery: customFetchBase,
  endpoints(builder) {
    return {
      getReviewByCustomer: builder.query({
        query: (parameters) => {
          return {
            method: "GET",
            url: "catalogs/reviews/customers/",
            params: parameters,
          };
        },
      }),
      addReview: builder.mutation({
        query: (data) => {
          return {
            url: "catalogs/reviews/customers/",
            method: "POST",
            body: data,
          };
        },
      }),
      getReviewProduct: builder.query({
        query: ([productId, parameters]) => {
          return {
            url: `catalogs/reviews/customers/reviews/${productId}`,
            method: "GET",
            params: parameters,
          };
        },
      }),
      updateReview: builder.mutation({
        query: ([reviewId, data]) => {
          return {
            url: `catalogs/reviews/customers/${reviewId}`,
            method: "PUT",
            body: data,
          };
        },
      }),
      deleteReview: builder.mutation({
        query: (reviewId) => {
          return {
            url: `catalogs/reviews/customers/${reviewId}`,
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
