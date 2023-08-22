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
          return (
            <div>
              <Image
                src={data.imageUrl}
                alt={data.name}
                width={100}
                height={80}
              />
              <div>{data.name}</div>
            </div>
          );
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
        label: "Fax",
        render: (data) => {
          return <div className="text-center">{data.fax}</div>;
        },
      },
      {
        label: "Hotline",
        render: (data) => {
          return <div className="text-center">{data.hotLine}</div>;
        },
      },
      {
        label: "Fax",
        render: (data) => {
          return <div className="text-center">{data.fax}</div>;
        },
      },
      {
        label: "Status",
        render: (data) => {
          return data.isActive ? (
            <div className="text-center">Active</div>
          ) : (
            <div className="text-center">None</div>
          );
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
