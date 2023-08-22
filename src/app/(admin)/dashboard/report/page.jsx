"use client";

import Link from "next/link";

import { IoAddCircleOutline } from "react-icons/io5";
import Image from "next/image";
import {
  useGetAllProductsQuery,
  useDeleteProductMutation,
} from "~/redux/services/catalog/product-api";
import Table from "~/app/components/table/table";
import { AiFillEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import { useFetchAllReportsQuery } from "~/redux/services/warehouse/report-api";
import SelectedReportStatus from "~/app/components/admin/selected-report-status";

function Report() {
  const { data, isSuccess } = useFetchAllReportsQuery();
  let configData = [];
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
          return (
            <div>
              <SelectedReportStatus
                reportId={data.id}
                data={data.reportStatus}
              />
            </div>
          );
        },
      },
      {
        label: "Report Type",
        render: (data) => {
          return data.reportType;
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
              <Link href={`/dashboard/products/edit-product/${data.id}`}>
                <AiFillEdit></AiFillEdit>
              </Link>
            </div>
          );
        },
      },
    ];
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
      <div className="my-8 w-full">
        {isSuccess && data.data && (
          <Table data={data.data} config={configData}></Table>
        )}
      </div>
    </div>
  );
}

export default Report;
