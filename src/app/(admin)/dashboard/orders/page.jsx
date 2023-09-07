"use client";

import {
  useGetAllOrderQuery,
  useProcessOrderMutation,
} from "~/redux/services/orders/order-api";
import Table from "~/app/components/table/table";
import Link from "next/link";
import { AiFillEye } from "react-icons/ai";
import { Spinner } from "@material-tailwind/react/components/Spinner";
import { formatPrice } from "~/utils/formatPrice";
import Button from "~/app/components/button/button";
import { useEffect } from "react";
import { toast } from "react-toastify";
function Orders() {
  const { data, isSuccess, isFetching } = useGetAllOrderQuery();
  const [handleProcessingOrder, result] = useProcessOrderMutation();
  let content, configData;

  useEffect(() => {
    if (result.isSuccess) {
      toast.success("Process Success");
    }
    if (result.isError) {
      toast.error("Process failed");
    }
  }, [result.isSuccess, result.isError]);
  if (isSuccess) {
    console.log(data);
    configData = [
      {
        label: "Customer Name",
        render: (data) => {
          return <div className="">{data.deliveryInfo.fullName}</div>;
        },
      },
      {
        label: "Phone number",
        render: (data) => {
          return (
            <div className="text-center">{data.deliveryInfo.phoneNumber}</div>
          );
        },
      },
      {
        label: "Total order",
        render: (data) => {
          return <div className="text-center">{formatPrice(data.cost)}</div>;
        },
      },
      {
        label: "Status",
        render: (data) => {
          return (
            <div className="flex justify-center items-center gap-4">
              {data.status === "Created" ? (
                <Button
                  onClick={() => {
                    handleProcessingOrder(data.id);
                  }}
                  secondary
                  small
                >
                  Process
                </Button>
              ) : (
                data.status
              )}
              {/* <Link href={`/dashboard/orders/order-detail/${data.id}`}>
                <AiFillEye />
              </Link> */}
            </div>
          );
        },
      },
    ];
  }

  if (isFetching) {
    content = (
      <div className="min-h-[400px] flex justify-center items-center">
        <Spinner className="h-16 w-16 text-gray-900/50"></Spinner>
      </div>
    );
  }
  if (isSuccess) {
    content = (
      <div>
        <div className="text-xl font-semibold">Order Page</div>
        <div>
          <Table config={configData} data={data.data} />
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Orders;
