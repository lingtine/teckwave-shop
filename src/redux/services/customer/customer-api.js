import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setUser } from "~/redux/features/auth/user-slice";
import authApi from "../authentication/auth-api";
const customerApi = createApi({
  reducerPath: "customer",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/customers/customers",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authSlice.accessToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  tagTypes: ["update"],
  endpoints(builder) {
    return {
      getAllCustomers: builder.query({
        query: () => {
          return {
            method: "GET",
          };
        },
      }),
      getCustomer: builder.query({
        query: () => {
          return {
            method: "GET",
            url: `/info`,
          };
        },
        async onQueryStarted(args, { dispatch, queryFulfilled, getState }) {
          try {
            const { data } = await queryFulfilled;
            await dispatch(setUser(data));
          } catch (error) {
            await dispatch(authApi.endpoints.refreshToken.initiate(null));
          }
        },
        providesTags: ["update"],
      }),
      getOrders: builder.query({
        query: (customerId) => {
          return {
            method: "GET",
            url: `/orders/${customerId}`,
          };
        },
      }),
      getOrderDetail: builder.query({
        query: (orderId) => {
          return {
            method: "GET",
            url: `/orders/${orderId}/detail`,
          };
        },
      }),
      addDeliveryInfos: builder.mutation({
        query: (customerId, deliveryInfos) => {
          return {
            url: `/${customerId}/delivery-infos`,
            method: "POST",
            body: deliveryInfos,
          };
        },
      }),
      updateDeliveryInfo: builder.mutation({
        query: (deliveryInfoId, data) => {
          return {
            url: `delivery-infos/${deliveryInfoId}`,
            method: "PUT",
            body: data,
          };
        },
      }),
      deleteDeliveryInfo: builder.mutation({
        query: (deliveryInfoId) => {
          return {
            url: `delivery-infos/${deliveryInfoId}`,
            method: "DELETE",
          };
        },
      }),
      updateDeliveryInfoDefault: builder.mutation({
        query: (deliveryInfoId) => {
          return {
            url: `delivery-infos/${deliveryInfoId}/default`,
            method: "PUT",
          };
        },
        invalidatesTags: ["update"],
      }),
      register: builder.mutation({
        query: (data) => {
          return {
            url: "/register",
            method: "POST",
            body: data,
          };
        },
      }),
      verifyEmail: builder.mutation({
        query: (email) => {
          return {
            url: "/verify-email",
            method: "POST",
            body: {
              email,
            },
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
  useGetOrdersQuery,

  useAddDeliveryInfosMutation,
  useUpdateDeliveryInfoDefaultMutation,
  useUpdateDeliveryInfoMutation,
  useDeleteDeliveryInfoMutation,

  useVerifyEmailMutation,
  useRegisterMutation,
} = customerApi;
