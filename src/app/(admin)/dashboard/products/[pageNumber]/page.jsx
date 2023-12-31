"use client";

import Link from "next/link";

import { IoAddCircleOutline } from "react-icons/io5";
import { AiFillEye } from "react-icons/ai";
import Image from "next/image";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useGetAllProductsByParameterMutation,
} from "~/redux/services/catalog/product-api";
import { Spinner } from "@material-tailwind/react/components/Spinner";
import Table from "~/app/components/table/table";
import { AiFillEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import Pagination from "~/app/components/pagination/pagination";
import { useParams } from "next/navigation";
import { formatPrice } from "~/utils/formatPrice";
import Button from "~/app/components/button/button";
function Products() {
  const { pageNumber } = useParams();
  const { data, isSuccess, isError, isFetching } = useGetAllProductsQuery({
    PageIndex: pageNumber,
  });
  const [removeProduct, result] = useDeleteProductMutation();
  let configData, content;

  if (isSuccess) {
    configData = [
      {
        label: "Product Name",
        render: (data) => {
          return (
            <div className="flex gap-4">
              <div className="relative w-20 h-20">
                <Image
                  src={data.imageUrl}
                  alt={data.name}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div>{data.name}</div>
            </div>
          );
        },
      },
      // {
      //   label: "Description",
      //   render: (data) => {
      //     return data.description;
      //   },
      // },
      {
        label: "Unit Price",
        render: (data) => {
          return (
            <div className="text-center">{formatPrice(data.unitPrice)}</div>
          );
        },
      },
      {
        label: "Number Star",
        render: (data) => {
          return <div className="text-center">{data.numberOfStar}</div>;
        },
      },
      {
        label: "Status",
        render: (data) => {
          return data.isActive ? (
            <div className="text-center">Active</div>
          ) : (
            <div className="text-center">None</div>
          );
        },
      },
      {
        label: "Actions",
        render: (data) => {
          return (
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  removeProduct(data.id);
                }}
              >
                <CiCircleRemove />
              </button>
              <Link href={`/dashboard/products/edit-product/${data.id}`}>
                <AiFillEdit></AiFillEdit>
              </Link>
              <Link href={`/dashboard/products/productDetail/${data.id}`}>
                <AiFillEye />
              </Link>
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
            pageIndex={Number(pageNumber)}
            pageSize={data.pageSize}
            url={"/dashboard/products"}
          />
        </div>
      </>
    );
  }

  return (
    <div className="mb-20">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Products</h3>

        <Link href={"/dashboard/products/add-product"}>
          <Button leftIcon={<IoAddCircleOutline />}>Add Products</Button>
        </Link>
      </div>
      {content}
    </div>
  );
}

export default Products;
