"use client";

import Link from "next/link";

import { IoAddCircleOutline } from "react-icons/io5";
import Image from "next/image";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useGetAllProductsByParameterMutation,
} from "~/redux/services/catalog/product-api";
import { Spinner } from "@material-tailwind/react/components/Spinner";
import Table from "~/app/components/table/table";
import { AiFillEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import Pagination from "~/app/components/pagination/pagination";
function Products() {
  const { data, isSuccess, isError, isFetching } = useGetAllProductsQuery();
  const [removeProduct, result] = useDeleteProductMutation();
  let configData, content;

  if (isSuccess) {
    configData = [
      {
        label: "Product Name",
        render: (data) => {
          return (
            <div className="flex max-w-[200px] gap-4 justify-between">
              <div className="relative w-20 h-20">
                <Image
                  src={data.imageUrl}
                  alt={data.name}
                  fill
                  className="object-contain"
                />
              </div>
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
              <Link href={`/dashboard/products/edit-product/${data.id}`}>
                <AiFillEdit></AiFillEdit>
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
            pageIndex={data.pageIndex}
            pageSize={data.pageSize}
            url={"/dashboard/products"}
          />
        </div>
      </>
    );
  }

  return (
    <div className="mb-20">
      <div className="flex justify-between">
        <div>Products</div>
        <div>
          <Link
            href={"/dashboard/products/add-product"}
            className="flex items-center bg-secondary-3 text-primary px-2 py-4 rounded-sm text-sm hover:opacity-90"
          >
            <IoAddCircleOutline />
            <span className="mx-2">Add Products</span>
          </Link>
        </div>
      </div>
      {content}
    </div>
  );
}

export default Products;
