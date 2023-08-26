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
import Pagination from "~/app/components/pagination/pagination";
import { Spinner } from "@material-tailwind/react/components/Spinner";

function Products() {
  const { data, isSuccess, isFetching } = useFetchAllSpecificationQuery();
  const [remove, result] = useDeleteSpecificationMutation();
  let configData, content;
  if (isSuccess) {
    configData = [
      {
        label: "Specification Name",
        render: (data) => {
          return <div className="text-center">{data.name}</div>;
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
                  remove(data.id);
                }}
              >
                <CiCircleRemove />
              </button>
              {/* <Link
                href={`/dashboard/specification/edit-specification/${data.id}`}
              >
                <AiFillEdit></AiFillEdit>
              </Link> */}
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
            pageIndex={0}
            pageSize={data.pageSize}
            url={"/dashboard/specification"}
          />
        </div>
      </>
    );
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
      {content}
    </div>
  );
}

export default Products;
