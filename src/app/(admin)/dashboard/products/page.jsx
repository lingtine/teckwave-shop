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
import { useEffect } from "react";
import Pagination from "~/app/components/products-page/pagination";
function Products() {
  const { data: productsData, isSuccess } = useGetAllProductsQuery();
  const [removeProduct, result] = useDeleteProductMutation();
  let configProductsData = [];
  if (isSuccess) {
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
      <div className="my-8 w-full">
        {isSuccess && productsData.data && (
          <Table data={productsData.data} config={configProductsData}></Table>
        )}
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}

export default Products;
