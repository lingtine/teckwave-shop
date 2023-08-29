"use client";

import Link from "next/link";

import { IoAddCircleOutline } from "react-icons/io5";

import Table from "~/app/components/table/table";
import { AiFillEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import { useFetchAllReportsQuery } from "~/redux/services/warehouse/report-api";
import { Spinner } from "@material-tailwind/react/components/Spinner";
import Pagination from "~/app/components/pagination/pagination";
import { AiFillEye } from "react-icons/ai";

function Report() {
  const { data, isSuccess, isFetching } = useFetchAllReportsQuery();
  let configData, content;
  if (isSuccess) {
    configData = [
      {
        label: "Description",
        render: (data) => {
          return data.description;
        },
      },
      {
        label: "Status",
        render: (data) => {
          return <div className="text-center">{data.reportStatus}</div>;
        },
      },
      {
        label: "Report Type",
        render: (data) => {
          return <div className="text-center">{data.reportType}</div>;
        },
      },
      {
        label: "Actions",
        render: (data) => {
          return (
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  removeProduct(data.id);
                }}
              >
                <CiCircleRemove />
              </button>
              <Link href={`/dashboard/products/edit-product/${data.id}`}>
                <AiFillEdit></AiFillEdit>
              </Link>
              <Link href={`/dashboard/report/report-detail/${data.id}`}>
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
  } else if (isSuccess) {
    content = (
      <>
        <div className="my-8 w-full">
          <Table data={data.data} config={configData}></Table>
        </div>
        <div className="flex justify-center">
          <Pagination
            totalCount={data.totalCount}
            pageIndex={0}
            pageSize={data.pageSize}
            url={"/dashboard/report"}
          />
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="flex justify-between">
        <div>Reports</div>
        <div>
          <Link
            href={"/dashboard/report/add-report"}
            className="flex items-center bg-secondary-3 text-primary px-2 py-4 rounded-sm text-sm hover:opacity-90"
          >
            <IoAddCircleOutline />
            <span className="mx-2">Add report</span>
          </Link>
        </div>
      </div>
      {content}
    </div>
  );
}

export default Report;
