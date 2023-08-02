"use client";

import Link from "next/link";

import { IoAddCircleOutline } from "react-icons/io5";

import {
  useGetAllProductsQuery,
  useDeleteProductMutation,
} from "~/redux/services/catalog/product-api";
import Table from "~/app/components/table/table";
import { AiFillEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
function Products() {
  const { data: productsData, isSuccess } = useGetAllProductsQuery();
  const [removeProduct, reuse] = useDeleteProductMutation();

  const data = [
    {
      image: "/images/products/iphone.png",
      name: "iphone 11 (64GB) - Chinh hãng  VN/A",
      price: 10390000,
    },
    {
      image: "/images/products/iphone.png",
      name: "iphone 11 (64GB) - Chinh hãng  VN/A",
      price: 10390000,
    },
    {
      image: "/images/products/iphone.png",
      name: "iphone 11 (64GB) - Chinh hãng  VN/A",
      price: 10390000,
    },
    {
      image: "/images/products/laptop.jpg",
      name: "iphone 11 (64GB) - Chinh hãng  VN/A",
      price: 10390000,
    },
    {
      image: "/images/products/iphone.png",
      name: "iphone 11 (64GB) - Chinh hãng  VN/A",
      price: 10390000,
    },
    {
      image: "/images/products/iphone.png",
      name: "iphone 11 (64GB) - Chinh hãng  VN/A",
      price: 10390000,
    },
    {
      image: "/images/products/iphone.png",
      name: "iphone 11 (64GB) - Chinh hãng  VN/A",
      price: 10390000,
    },
  ];
  let configProductsData;
  if (isSuccess) {
    const data = productsData.data;
    configProductsData = [
      {
        label: "Product Name",
        render: (data) => {
          return data.name;
        },
      },
      {
        label: "Unit Price",
        render: (data) => {
          return data.unitPrice;
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
            <div className="flex justify-center">
              <button
                className="mx-4"
                onClick={() => {
                  removeProduct(data.id);
                }}
              >
                <CiCircleRemove />
              </button>
              <Link href={`/admin/products/edit-product/${data.id}`}>
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
        <div>Products</div>
        <div>
          <Link
            href={"/admin/products/add-product"}
            className="flex items-center bg-secondary-3 text-primary px-2 py-4 rounded-sm text-sm hover:opacity-90"
          >
            <IoAddCircleOutline />
            <span className="mx-2">Add Products</span>
          </Link>
        </div>
      </div>
      <div className="my-8 w-full">
        {isSuccess && (
          <Table data={productsData.data} config={configProductsData}></Table>
        )}
      </div>
    </div>
  );
}

export default Products;
