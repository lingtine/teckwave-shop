"use client";

import { useGetAllCustomersQuery } from "~/redux/services/customer/customer-api";

function Customers() {
  const { data, isSuccess } = useGetAllCustomersQuery({});

  if (isSuccess) {
    console.log(data);
  }

  return <div>Customers</div>;
}

export default Customers;
