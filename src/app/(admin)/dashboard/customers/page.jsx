"use client";

import { useGetAllCustomersQuery } from "~/redux/services/customer/customer-api";
import { Spinner } from "@material-tailwind/react/components/Spinner";
import Table from "~/app/components/table/table";
import { CiCircleRemove } from "react-icons/ci";
import Pagination from "~/app/components/pagination/pagination";
function Customers() {
  const { data, isSuccess, isFetching } = useGetAllCustomersQuery({});

  let content, configData;
  if (isSuccess) {
    configData = [
      {
        label: "Name",
        render: (data) => {
          return <div className="text-center">{data.name}</div>;
        },
      },
      {
        label: "Email",
        render: (data) => {
          return <div className="text-center">{data.email}</div>;
        },
      },
      {
        label: "Actions",
        render: (data) => {
          return (
            <div className="flex justify-center">
              <button className="mx-4" onClick={() => {}}>
                <CiCircleRemove />
              </button>
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
  }

  if (isSuccess) {
    content = (
      <div className="my-8 w-full">
        <Table data={data.data} config={configData}></Table>
        {/* <Pagination
          url={"/dashboard/customers"}
          pageIndex={0}
          totalCount={data.totalCount}
          pageSize={data.pageSize}
        /> */}
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Customers;
