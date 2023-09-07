import { createApi } from "@reduxjs/toolkit/query/react";

import { setUser } from "~/redux/features/auth/user-slice";
import authApi from "../authentication/auth-api";
import cartApi from "../orders/cart-api";
import customFetchBase from "~/redux/api/customFetchBase";
import { setWishList } from "~/redux/features/auth/wish-list-slice";

const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: customFetchBase,
  tagTypes: [
    "update",
    "add-wish-list",
    "add-delivery-info",
    "update-delivery-info",
  ],
  endpoints(builder) {
    return {
      getAllCustomers: builder.query({
        query: () => {
          return {
            method: "GET",
            url: "customers/customers",
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
            await dispatch(cartApi.endpoints.getCartDetail.initiate());
            await dispatch(customerApi.endpoints.getWishList.initiate(null));
          } catch (error) {}
        },
        providesTags: ["update", "add-delivery-info", "update-delivery-info"],
      }),
      getCustomerByMu: builder.mutation({
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
            await dispatch(cartApi.endpoints.getCartDetail.initiate());
          } catch (error) {}
        },
        providesTags: ["update", "add-delivery-info", "update-delivery-info"],
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
        invalidatesTags: ["add-delivery-info"],
      }),
      updateDeliveryInfo: builder.mutation({
        query: ([deliveryInfoId, data]) => {
          return {
            url: `customers/customers/delivery-infos/${deliveryInfoId}`,
            method: "PUT",
            body: data,
          };
        },
        invalidatesTags: ["update-delivery-info"],
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
            url: `customers/customers/delivery-infos/${deliveryInfoId}`,
            method: "PATCH",
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
        providesTags: ["update"],
        async onQueryStarted(args, { dispatch, queryFulfilled, getState }) {
          try {
            const { data } = await queryFulfilled;
            await dispatch(setWishList(data.data));
          } catch (error) {}
        },
      }),
      addToWishList: builder.mutation({
        query: (productId) => {
          return {
            url: `customers/customers/wishlist/${productId}`,
            method: "POST",
          };
        },
        invalidatesTags: ["update"],
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
  useGetCustomerByMuMutation,
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
