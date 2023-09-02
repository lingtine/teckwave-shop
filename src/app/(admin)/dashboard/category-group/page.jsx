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

import { Spinner } from "@material-tailwind/react/components/Spinner";
import Button from "~/app/components/button/button";
function CategoryGroup() {
  const { data, isSuccess, isFetching } = useFetchCategoryGroupsQuery();
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
        <Table data={data.data} config={configCategoryGroup}></Table>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Category group</h3>

        <Link href={"/dashboard/category-group/add-category-group"}>
          <Button leftIcon={<IoAddCircleOutline />}>
            Create category group
          </Button>
        </Link>
      </div>
      {content}
    </div>
  );
}

export default CategoryGroup;
