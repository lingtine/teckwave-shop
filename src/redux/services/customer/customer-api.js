import { createApi } from "@reduxjs/toolkit/query/react";

import { setUser } from "~/redux/features/auth/user-slice";
import authApi from "../authentication/auth-api";
import cartApi from "../orders/cart-api";
import customFetchBase from "~/redux/api/customFetchBase";

const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: customFetchBase,
  tagTypes: ["update"],
  endpoints(builder) {
    return {
      getAllCustomers: builder.query({
        query: () => {
          return {
            method: "GET",
            url: "customers/customers/",
          };
        },
      }),
      getCustomer: builder.query({
        query: () => {
          return {
            method: "GET",
            url: `customers/customers/info`,
          };
        },
        async onQueryStarted(args, { dispatch, queryFulfilled, getState }) {
          try {
            const { data } = await queryFulfilled;
            await dispatch(setUser(data.data));
            await dispatch(cartApi.endpoints.getCartDetail.initiate(null));
          } catch (error) {
            await dispatch(authApi.endpoints.refreshToken.initiate(null));
          }
        },
        providesTags: ["update"],
      }),

      //delivery info
      getDeliveryInfo: builder.query({
        query: (deliveryInfoId) => {
          return {
            url: `customers/customers/delivery-infos/${deliveryInfoId}`,
            method: "GET",
          };
        },
      }),
      addDeliveryInfos: builder.mutation({
        query: (deliveryInfos) => {
          return {
            url: `customers/customers/delivery-infos`,
            method: "POST",
            body: deliveryInfos,
          };
        },
      }),
      updateDeliveryInfo: builder.mutation({
        query: (deliveryInfoId, data) => {
          return {
            url: `customers/customers/delivery-infos/${deliveryInfoId}`,
            method: "PUT",
            body: data,
          };
        },
      }),
      deleteDeliveryInfo: builder.mutation({
        query: (deliveryInfoId) => {
          return {
            url: `customers/customers/delivery-infos/${deliveryInfoId}`,
            method: "DELETE",
          };
        },
      }),
      changeDeliveryInfoDefault: builder.mutation({
        query: (deliveryInfoId) => {
          return {
            url: `customers/customers/delivery-infos/${deliveryInfoId}/default`,
            method: "PUT",
          };
        },
        invalidatesTags: ["update"],
      }),

      // wish list
      getWishList: builder.query({
        query: () => {
          return {
            url: "customers/customers/wishlist",
            method: "GET",
          };
        },
      }),
      addToWishList: builder.mutation({
        query: (productId) => {
          return {
            url: `customers/customers/wishlist/${productId}`,
            method: "POST",
          };
        },
      }),
      removeToWishList: builder.mutation({
        query: (productId) => {
          return {
            url: `customers/customers/wishlist/${productId}`,
            method: "DELETE",
          };
        },
      }),

      //orders
      getOrders: builder.query({
        query: () => {
          return {
            method: "GET",
            url: `customers/customers/orders`,
          };
        },
      }),
      getOrderDetail: builder.query({
        query: (orderId) => {
          return {
            method: "GET",
            url: `customers/customers/orders/${orderId}/detail`,
          };
        },
      }),

      //verify email
      register: builder.mutation({
        query: (data) => {
          return {
            url: "customers/customers/register",
            method: "POST",
            body: data,
          };
        },
      }),
      verifyEmail: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            url: "customers/customers/verify-email",
            body: data,
          };
        },
      }),
    };
  },
});

export default customerApi;
export const {
  useGetAllCustomersQuery,
  useGetCustomerQuery,

  //delivery info
  useChangeDeliveryInfoDefaultMutation,
  useAddDeliveryInfosMutation,
  useUpdateDeliveryInfoMutation,
  useGetDeliveryInfoQuery,
  useDeleteDeliveryInfoMutation,

  //order
  useGetOrdersQuery,
  useGetOrderDetailQuery,

  //wishlist
  useGetWishListQuery,
  useAddToWishListMutation,
  useRemoveToWishListMutation,

  //register
  useRegisterMutation,
  useVerifyEmailMutation,
} = customerApi;
