"use client";

import Link from "next/link";

import Image from "next/image";
import {
  useFetchAllBrandsQuery,
  useDeleteBrandMutation,
  useFetchBrandsByParametersMutation,
} from "~/redux/services/catalog/brand-api";
import Table from "~/app/components/table/table";
import { AiFillEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Pagination from "~/app/components/products-page/pagination";
function Products() {
  const [getBrands, { isSuccess, data: brandData }] =
    useFetchBrandsByParametersMutation();
  const [currentPage, setCurrentPage] = useState(0);
  const [removeBrand, result] = useDeleteBrandMutation();
  let configData = [];
  useEffect(() => {
    getBrands({ PageIndex: currentPage });
  }, [currentPage]);
  if (isSuccess) {
    console.log(brandData);
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
      <div className="my-8 w-full">
        {isSuccess && brandData.data && (
          <Table data={brandData.data} config={configData}></Table>
        )}

        <div className="flex justify-center my-4">
          {isSuccess && (
            <Pagination
              pageIndex={currentPage}
              changePage={setCurrentPage}
              pageSize={brandData.pageSize}
              totalCount={brandData.totalCount}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
