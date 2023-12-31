"use client";

import Link from "next/link";

import { IoAddCircleOutline } from "react-icons/io5";

import Table from "~/app/components/table/table";
import { AiFillEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import { useFetchAllReportsQuery } from "~/redux/services/warehouse/report-api";
import { Spinner } from "@material-tailwind/react/components/Spinner";
import Pagination from "~/app/components/pagination/pagination";
import { useParams } from "next/navigation";
import Button from "~/app/components/button/button";
function Report() {
  const { pageNumber } = useParams();
  const { data, isSuccess, isFetching } = useFetchAllReportsQuery({
    PageIndex: pageNumber,
  });
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
            <div className="flex justify-center">
              <button
                className="mx-4"
                onClick={() => {
                  removeProduct(data.id);
                }}
              >
                <CiCircleRemove />
              </button>
              {/* <Link href={`/dashboard/products/edit-product/${data.id}`}>
                <AiFillEdit></AiFillEdit>
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
  } else if (isSuccess) {
    content = (
      <>
        <div className="my-8 w-full">
          <Table data={data.data} config={configData}></Table>
        </div>
        <div className="flex justify-center">
          <Pagination
            totalCount={data.totalCount}
            pageIndex={pageNumber}
            pageSize={data.pageSize}
            url={"/dashboard/report"}
          />
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Report</h3>

        <Link href={"/dashboard/report/add-report"}>
          <Button leftIcon={<IoAddCircleOutline />}>Add report</Button>
        </Link>
      </div>
      {content}
    </div>
  );
}

export default Report;
