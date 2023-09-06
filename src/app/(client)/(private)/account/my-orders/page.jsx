"use client";
import { useGetOrdersCustomerQuery } from "~/redux/services/orders/order-api";
import Table from "~/app/components/table/table";
import { formatPrice } from "~/utils/formatPrice";

function MyOrders() {
  const { data, isSuccess } = useGetOrdersCustomerQuery();

  let configData, renderData;

  if (isSuccess) {
    configData = [
      {
        label: "Full Name",
        render: (data) => {
          return (
            <div className="text-center">{data.deliveryInfo.fullName}</div>
          );
        },
      },
      {
        label: "Phone Number",
        render: (data) => {
          return (
            <div className="text-center">{data.deliveryInfo.phoneNumber}</div>
          );
        },
      },
      {
        label: "Total",
        render: (data) => {
          return <div className="text-center">{formatPrice(data.cost)}</div>;
        },
      },
      {
        label: "Status",
        render: (data) => {
          return <div className="text-center">{data.status}</div>;
        },
      },
    ];
  }

  if (isSuccess) {
    renderData = <Table config={configData} data={data.data} />;
  }
  return (
    <div>
      <h3 className="text-xl font-bold text-primary-1">My Orders</h3>
      <div className="my-8">{renderData}</div>
    </div>
  );
}

export default MyOrders;
