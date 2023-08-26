"use client";

import Link from "next/link";
import { Spinner } from "@material-tailwind/react/components/Spinner";
import { IoAddCircleOutline } from "react-icons/io5";
import Pagination from "~/app/components/pagination/pagination";
import Table from "~/app/components/table/table";
import { AiFillEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import {
  useFetchCategoriesQuery,
  useRemoveCategoryMutation,
} from "~/redux/services/catalog/category-api";
import { useEffect } from "react";
function Category() {
  const { data, isSuccess, isFetching } = useFetchCategoriesQuery();
  const [removeCategory, result] = useRemoveCategoryMutation();
  let configCategoryData = [];
  if (isSuccess) {
    configCategoryData = [
      {
        label: "Category Name",
        render: (data) => {
          return <div className="">{data.name}</div>;
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
                  removeCategory(data.id);
                }}
              >
                <CiCircleRemove />
              </button>
              <Link href={`/dashboard/category/edit-category/${data.id}`}>
                <AiFillEdit></AiFillEdit>
              </Link>
            </div>
          );
        },
      },
    ];
  }
  useEffect(() => {
    if (result.isSuccess) {
    }
  }, [result.isSuccess]);

  let content;

  if (isFetching) {
    content = (
      <div className="min-h-[400px] flex justify-center items-center">
        <Spinner className="h-16 w-16 text-gray-900/50"></Spinner>
      </div>
    );
  } else if (data) {
    content = (
      <div className="my-8 w-full">
        <Table data={data.data} config={configCategoryData}></Table>

        <div className="flex justify-center my-4">
          <Pagination
            url={"/dashboard/category"}
            pageIndex={0}
            totalCount={data.totalCount}
            pageSize={data.pageSize}
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-between">
        <div>Category</div>
        <div className="">
          <Link
            href={"/dashboard/category/add-category"}
            className="flex items-center bg-secondary-3 text-primary px-2 py-4 rounded-sm text-sm hover:opacity-90"
          >
            <IoAddCircleOutline />
            <span className="mx-2">Add category</span>
          </Link>
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default Category;
