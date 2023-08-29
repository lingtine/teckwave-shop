"use client";

import { Spinner } from "@material-tailwind/react/components/Spinner";
import Table from "~/app/components/table/table";
import Pagination from "~/app/components/pagination/pagination";
import Link from "next/link";
import Button from "~/app/components/button/button";
import { CiCircleRemove } from "react-icons/ci";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import {
  useGetAllCouponQuery,
  useRemoveCouponMutation,
} from "~/redux/services/discount/coupon-api";

function CouponsPage() {
  const { data, isSuccess, isFetching } = useGetAllCouponQuery();
  const [remove, result] = useRemoveCouponMutation();
  let configData, content;

  if (isSuccess) {
    configData = [
      {
        label: "Name coupon ",
        render: (data) => {
          return <div className="">{data.name}</div>;
        },
      },
      {
        label: "Description",
        render: (data) => {
          return <div className="text-center">{data.description}</div>;
        },
      },
      {
        label: "Quantity",
        render: (data) => {
          return <div className="text-center">{data.quantity}</div>;
        },
      },
      {
        label: "Reduced price",
        render: (data) => {
          return <div className="text-center">{data.reducedPrice}</div>;
        },
      },
      {
        label: "Status",
        render: (data) => {
          return <div className="text-center">{data.status}</div>;
        },
      },

      {
        label: "Actions",
        render: (data) => {
          return (
            <div className="flex justify-center">
              <button
                className="mx-4"
                onClick={() => {
                  remove(data.id);
                }}
              >
                <CiCircleRemove />
              </button>
              {/* <Link href={`/dashboard/category/edit-category/${data.id}`}>
                <AiFillEdit></AiFillEdit>
              </Link> */}
              <Link href={`/dashboard/coupons/coupon-detail/${data.id}`}>
                <AiFillEye />
              </Link>
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
  } else if (data) {
    content = (
      <div className="my-8 w-full">
        <Table data={data.data} config={configData}></Table>

        <div className="flex justify-center my-4">
          <Pagination
            url={"/dashboard/coupons"}
            pageIndex={0}
            totalCount={data.totalCount}
            pageSize={data.pageSize}
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Coupon</h3>
        <Link href={"/dashboard/coupons/add-coupon"}>
          <Button>Add Coupon</Button>
        </Link>
      </div>

      <div>{content}</div>
    </div>
  );
}

export default CouponsPage;
