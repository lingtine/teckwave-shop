"use client";

import { formatPrice } from "~/utils/formatPrice";
import { useProcessOrderMutation } from "~/redux/services/orders/order-api";
function OrderInformation({ data }) {
  const [handleProcessing, result] = useProcessOrderMutation();
  console.log(data);

  return (
    <div>
      <div></div>
    </div>
  );
}

export default OrderInformation;
