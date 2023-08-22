"use client";

import Link from "next/link";

import { IoAddCircleOutline } from "react-icons/io5";
import Image from "next/image";

import Table from "~/app/components/table/table";
import { AiFillEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import {
  useFetchAllSuppliersQuery,
  useRemoveSupplierMutation,
} from "~/redux/services/warehouse/supplier-api";
function Products() {
  const { data, isSuccess } = useFetchAllSuppliersQuery();
  const [remove, result] = useRemoveSupplierMutation();
  let configData = [];
  if (isSuccess) {
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
        label: "Phone Number",
        render: (data) => {
          return <div className="text-center">{data.phoneNumber}</div>;
        },
      },
      {
        label: "Address",
        render: (data) => {
          return <div className="text-center">{data.address}</div>;
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
              <Link href={`/dashboard/supplier/edit-supplier/${data.id}`}>
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
        <div>Supplier</div>
        <div>
          <Link
            href={"/dashboard/supplier/add-supplier"}
            className="flex items-center bg-secondary-3 text-primary px-2 py-4 rounded-sm text-sm hover:opacity-90"
          >
            <IoAddCircleOutline />
            <span className="mx-2">Add Supplier</span>
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
