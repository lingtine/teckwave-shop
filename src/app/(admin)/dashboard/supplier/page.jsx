"use client";

import Link from "next/link";

import { IoAddCircleOutline } from "react-icons/io5";

import Table from "~/app/components/table/table";
import { AiFillEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import {
  useFetchAllSuppliersQuery,
  useRemoveSupplierMutation,
} from "~/redux/services/warehouse/supplier-api";
import Pagination from "~/app/components/pagination/pagination";
import { Spinner } from "@material-tailwind/react/components/Spinner";
import Button from "~/app/components/button/button";

function Products() {
  const { data, isSuccess, isFetching } = useFetchAllSuppliersQuery();
  const [remove, result] = useRemoveSupplierMutation();
  let configData, content;
  if (isSuccess) {
    configData = [
      {
        label: "Supplier Name",
        render: (data) => {
          return <div>{data.name}</div>;
        },
      },
      {
        label: "Description",
        render: (data) => {
          return data.description;
        },
      },
      {
        label: "Email",
        render: (data) => {
          return data.email;
        },
      },
      {
        label: "Phone Number",
        render: (data) => {
          return <div className="text-center">{data.phoneNumber}</div>;
        },
      },
      {
        label: "Address",
        render: (data) => {
          return <div className="text-center">{data.address}</div>;
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
              {/* <Link href={`/dashboard/supplier/edit-supplier/${data.id}`}>
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
            pageSize={20}
            url={"/dashboard/supplier"}
          />
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Supplier</h3>

        <Link href={"/dashboard/supplier/add-supplier"}>
          <Button leftIcon={<IoAddCircleOutline />}>Add supplier</Button>
        </Link>
      </div>
      {content}
    </div>
  );
}

export default Products;
