"use client";

import Link from "next/link";

import Image from "next/image";
import { Spinner } from "@material-tailwind/react/components/Spinner";
import {
  useFetchAllBrandsQuery,
  useDeleteBrandMutation,
} from "~/redux/services/catalog/brand-api";
import Table from "~/app/components/table/table";
import { AiFillEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Pagination from "~/app/components/pagination/pagination";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
function Products() {
  const { pageNumber } = useParams();
  const { data, isSuccess, isFetching } = useFetchAllBrandsQuery({
    PageIndex: pageNumber,
  });

  const [removeBrand, result] = useDeleteBrandMutation();
  let configData = [];

  useEffect(() => {
    if (result.isSuccess) {
      toast.success("Delete success");
    }
  }, [result.isSuccess]);
  if (isSuccess) {
    configData = [
      {
        label: "Brand Name",
        render: (data) => {
          return (
            <div className="flex items-center justify-evenly px-8">
              <Image
                src={data.imageUrl}
                alt={data.name}
                width={50}
                height={30}
              />
              <div className="mx-4">{data.name}</div>
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
        label: "Actions",
        render: (data) => {
          return (
            <div className="flex justify-center">
              <button
                className="mx-4"
                onClick={() => {
                  removeBrand(data.id);
                }}
              >
                <CiCircleRemove />
              </button>
              <Link href={`/dashboard/brands/edit-brand/${data.id}`}>
                <AiFillEdit></AiFillEdit>
              </Link>
            </div>
          );
        },
      },
    ];
  }

  let content;

  if (isFetching) {
    content = (
      <div className="min-h-[400px] flex justify-center items-center">
        <Spinner className="h-16 w-16 text-gray-900/50"></Spinner>
      </div>
    );
  } else if (isSuccess) {
    content = (
      <div className="my-8 w-full">
        <Table data={data.data} config={configData}></Table>

        <div className="flex justify-center my-4">
          <Pagination
            url={"/dashboard/brands"}
            pageIndex={pageNumber}
            pageSize={data.pageSize}
            totalCount={data.totalCount}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between">
        <div>Brands</div>
        <div>
          <Link
            href={"/dashboard/brands/add-brand"}
            className="flex items-center bg-secondary-3 text-primary px-2 py-4 rounded-sm text-sm hover:opacity-90"
          >
            <IoAddCircleOutline />
            <span className="mx-2">Add brand</span>
          </Link>
        </div>
      </div>
      {content}
    </div>
  );
}

export default Products;
