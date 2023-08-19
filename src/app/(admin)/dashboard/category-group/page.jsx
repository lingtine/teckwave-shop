"use client";

import Link from "next/link";

import { IoAddCircleOutline } from "react-icons/io5";
import Image from "next/image";
import Table from "~/app/components/table/table";
import { AiFillEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import {
  useFetchCategoryGroupsQuery,
  useRemoveCategoryGroupMutation,
} from "~/redux/services/catalog/category-group-api";
function CategoryGroup() {
  const { data, isSuccess } = useFetchCategoryGroupsQuery();
  const [removeCategory, result] = useRemoveCategoryGroupMutation();
  let configCategoryGroup = [];
  if (isSuccess) {
    configCategoryGroup = [
      {
        label: "Category Group Name",
        render: (data) => {
          return (
            <div>
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
              <Link
                href={`/dashboard/category-group/edit-category-group/${data.id}`}
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
        <div>Category group</div>
        <div>
          <Link
            href={"/dashboard/category-group/add-category-group"}
            className="flex items-center bg-secondary-3 text-primary px-2 py-4 rounded-sm text-sm hover:opacity-90"
          >
            <IoAddCircleOutline />
            <span className="mx-2">Add Category Group</span>
          </Link>
        </div>
      </div>
      <div className="my-8 w-full">
        {isSuccess && data.data && (
          <Table data={data.data} config={configCategoryGroup}></Table>
        )}
      </div>
    </div>
  );
}

export default CategoryGroup;
