"use client";

import Link from "next/link";

import { IoAddCircleOutline } from "react-icons/io5";
import Image from "next/image";

import Table from "~/app/components/table/table";
import { AiFillEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import {
  useFetchAllWarehousersQuery,
  useRemoveWarehouserMutation,
} from "~/redux/services/warehouse/warehouse-api";
function Products() {
  const { data, isSuccess } = useFetchAllWarehousersQuery();
  const [remove, result] = useRemoveWarehouserMutation();
  let configData = [];
  if (isSuccess) {
    console.log(data);
    configData = [
      {
        label: "Supplier Name",
        render: (data) => {
          return <div>{data.name}</div>;
        },
      },
      {
        label: "Description",
        render: (data) => {
          return data.description;
        },
      },
      {
        label: "Email",
        render: (data) => {
          return data.email;
        },
      },

      {
        label: "Status",
        render: (data) => {
          return data.isDelete ? (
            <div className="text-center">None</div>
          ) : (
            <div className="text-center">Active</div>
          );
        },
      },
      {
        label: "Type",
        render: (data) => {
          return <div className="text-center">{data.type}</div>;
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
              <Link href={`/dashboard/warehouse/edit-warehouse/${data.id}`}>
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
        <div>Warehouse</div>
        <div>
          <Link
            href={"/dashboard/warehouse/add-warehouse"}
            className="flex items-center bg-secondary-3 text-primary px-2 py-4 rounded-sm text-sm hover:opacity-90"
          >
            <IoAddCircleOutline />
            <span className="mx-2">Add Warehouse</span>
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

export default Products;
