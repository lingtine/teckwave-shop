"use client";

import Link from "next/link";

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
function Category() {
  const { pageNumber } = useParams();
  const { data, isSuccess } = useFetchCategoriesQuery({
    PageIndex: pageNumber,
  });
  const [removeCategory, result] = useRemoveCategoryMutation();
  let configCategoryData = [];
  if (isSuccess) {
    console.log(data);
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

  return (
    <div>
      <div className="flex justify-between">
        <div>Category</div>
        <div>
          <Link
            href={"/dashboard/category/add-category"}
            className="flex items-center bg-secondary-3 text-primary px-2 py-4 rounded-sm text-sm hover:opacity-90"
          >
            <IoAddCircleOutline />
            <span className="mx-2">Add category</span>
          </Link>
        </div>
      </div>
      <div className="my-8 w-full">
        {isSuccess && data.data && (
          <Table data={data.data} config={configCategoryData}></Table>
        )}
        <div className="flex justify-center my-4">
          {isSuccess && (
            <Pagination
              url={"/dashboard/category"}
              pageIndex={pageNumber}
              totalCount={data.totalCount}
              pageSize={data.pageSize}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
