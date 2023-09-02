"use client";

import { useGetOrderDetailQuery } from "~/redux/services/customer/customer-api";
import { useParams } from "next/navigation";
import { Spinner } from "@material-tailwind/react/components/Spinner";
import OrderInformation from "~/app/components/orders/order-information";

function OrderDetail() {
  const { orderId } = useParams();
  const { data, isFetching, isSuccess } = useGetOrderDetailQuery(orderId);
  let content;

  if (isFetching) {
    content = (
      <div className="min-h-[400px] flex justify-center items-center">
        <Spinner className="h-16 w-16 text-gray-900/50"></Spinner>
      </div>
    );
  } else if (isSuccess) {
    content = (
      <div>
        <div>
          <h3>Order detail</h3>
        </div>
        <div>
          <OrderInformation data={data.data} />
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default OrderDetail;
