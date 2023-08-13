"use client";

import { useGetOrdersQuery } from "~/redux/services/customer/customer-api";
import Table from "~/app/components/table/table";

function MyOrders() {
  const { data: ordersData } = useGetOrdersQuery();

  return <div>My Orders</div>;
}

export default MyOrders;
