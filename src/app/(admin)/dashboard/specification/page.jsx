"use client";

import Link from "next/link";

import { IoAddCircleOutline } from "react-icons/io5";
import Image from "next/image";
import {
  useFetchAllSpecificationQuery,
  useDeleteSpecificationMutation,
} from "~/redux/services/catalog/specification-api";
import Table from "~/app/components/table/table";
import { AiFillEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import { useEffect } from "react";
function Products() {
  const { data: specificationData, isSuccess } =
    useFetchAllSpecificationQuery();
  const [removeProduct, result] = useDeleteSpecificationMutation();
  let configProductsData = [];
  if (isSuccess) {
    console.log(specificationData);
    configProductsData = [
      {
        label: "Product Name",
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
        label: "Unit Price",
        render: (data) => {
          return data.unitPrice;
        },
      },
      {
        label: "Number Star",
        render: (data) => {
          return <div className="text-center">{data.numberOfStar}</div>;
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
              <Link
                href={`/dashboard/specification/edit-specification/${data.id}`}
              >
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
        <div>Specification</div>
        <div>
          <Link
            href={"/dashboard/specification/add-specification"}
            className="flex items-center bg-secondary-3 text-primary px-2 py-4 rounded-sm text-sm hover:opacity-90"
          >
            <IoAddCircleOutline />
            <span className="mx-2">Add Specification</span>
          </Link>
        </div>
      </div>
      <div className="my-8 w-full">
        {isSuccess && specificationData.data && (
          <Table
            data={specificationData.data}
            config={configProductsData}
          ></Table>
        )}
      </div>
    </div>
  );
}

export default Products;
