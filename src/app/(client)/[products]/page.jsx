"use client";

import { useEffect, useState } from "react";
import SelectBox from "~/app/components/select-box/select-box";
import ProductList from "~/app/components/products/product-list";
import Pagination from "~/app/components/products-page/pagination";
import FilterProducts from "~/app/components/products-page/filter-products";
import { useRouter, useParams } from "next/navigation";
import { useGetAllProductsByParameterMutation } from "~/redux/services/catalog/product-api";
import SkeletonCard from "~/app/components/skeleton/skeleton-cards";
function ProductsPage() {
  const { products } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [getProducts, { data, isSuccess, isError, isLoading }] =
    useGetAllProductsByParameterMutation();
  const router = useRouter();

  const [valueSorted, setValueSorted] = useState(null);

  const typesSoft = [
    {
      label: "a-z",
      id: Math.random(),
      value: {
        OrderBy: "Name",
        IsOrderDesc: false,
      },
    },
    {
      label: "z-a",
      id: Math.random(),
      value: {
        OrderBy: "Name",
        IsOrderDesc: true,
      },
    },
    {
      label: "low-hight",
      id: Math.random(),
      value: {
        OrderBy: "Price",
        IsOrderDesc: false,
      },
    },
    {
      label: "hight-low",
      id: Math.random(),
      value: {
        OrderBy: "Price",
        IsOrderDesc: true,
      },
    },
  ];

  const filterData = [
    {
      id: Math.random(),
      label: "Ram",
      options: [
        {
          id: Math.random(),
          label: "32GB",
        },
        {
          id: Math.random(),
          label: "16GB",
        },
        {
          id: Math.random(),
          label: "64GB",
        },
        {
          id: Math.random(),
          label: "8GB",
        },
      ],
    },
    {
      id: Math.random(),
      label: "Ram2",
      options: [
        {
          id: Math.random(),
          label: "32GB",
        },
        {
          id: Math.random(),
          label: "16GB",
        },
        {
          id: Math.random(),
          label: "64GB",
        },
        {
          id: Math.random(),
          label: "8GB",
        },
      ],
    },
    {
      id: Math.random(),
      label: "Ram1",
      options: [
        {
          id: Math.random(),
          label: "32GB",
        },
        {
          id: Math.random(),
          label: "16GB",
        },
        {
          id: Math.random(),
          label: "64GB",
        },
        {
          id: Math.random(),
          label: "8GB",
        },
      ],
    },
  ];
  useEffect(() => {
    const parameter = {
      CategoryGroupId: products,
      pageIndex: currentPage,
      ...valueSorted?.value,
    };
    getProducts(parameter);
    window.scrollTo(0, 0);
  }, [getProducts, currentPage, valueSorted]);

  let content;
  if (isLoading) {
    content = <SkeletonCard times={8} />;
  } else if (data) {
    content = (
      <>
        <div className="my-4">{<ProductList products={data.data} />}</div>
        <div className="mx-auto">
          {isSuccess && (
            <Pagination
              totalCount={data.totalCount}
              pageIndex={data.pageIndex}
              pageSize={data.pageSize}
              changePage={(numberPage) => {
                setCurrentPage(numberPage);
              }}
            />
          )}
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto  ">
      <div className="grid grid-flow-row grid-cols-6 gap-2">
        <div className=" bg-white h-fit rounded-xl py-4">
          <FilterProducts dateFilter={filterData} />
        </div>
        <div className="col-span-5  py-4 px-2">
          <div className="flex flex-col ">
            <div className="flex justify-end">
              <SelectBox
                options={typesSoft}
                selected={valueSorted}
                onChange={setValueSorted}
              />
            </div>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
