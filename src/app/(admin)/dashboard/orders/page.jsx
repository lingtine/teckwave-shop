"use client";

import { useGetAllOrderQuery } from "~/redux/services/orders/order-api";

function Orders() {
  const { data, isSuccess } = useGetAllOrderQuery();

  if (isSuccess) {
  }

  return <div>orders page</div>;
}

export default Orders;
