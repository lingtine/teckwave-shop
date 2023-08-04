import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const customerApi = createApi({
  reducerPath: "customer",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/customers/customers",
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
        query: (customerId) => {
          return {
            method: "GET",
            url: `/${customerId}`,
          };
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
} = customerApi;
