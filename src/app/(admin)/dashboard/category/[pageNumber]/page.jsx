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
import { useRouter, useParams } from "next/navigation";
import { Button } from "@material-tailwind/react";
function Category() {
  const { pageNumber } = useParams();
  const { data, isSuccess, isFetching } = useFetchCategoriesQuery({
    PageIndex: pageNumber,
  });
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
            pageIndex={pageNumber}
            totalCount={data.totalCount}
            pageSize={data.pageSize}
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Category</h3>

        <Link href={"/dashboard/category/add-category"}>
          <Button leftIcon={<IoAddCircleOutline />}>Create category</Button>
        </Link>
      </div>
      {content}
    </div>
  );
}

export default Category;
