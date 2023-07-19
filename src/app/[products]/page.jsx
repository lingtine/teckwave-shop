"use client";

import { useState } from "react";
import SelectBox from "../components/select-box/select-box";
import ProductList from "../components/products/product-list";
import Pagination from "../components/products-page/pagination";
import FilterProducts from "../components/products-page/filter-products";

function ProductsPage() {
  const [valueSorted, setValueSorted] = useState(null);

  const typesSoft = [
    {
      label: "a-z",
      id: Math.random(),
    },
    {
      label: "z-a",
      id: Math.random(),
    },
    {
      label: "low-hight",
      id: Math.random(),
    },
    {
      label: "hight-low",
      id: Math.random(),
    },
  ];
  const data = {
    title: "APPLE AUTHORISED RESELLER",
    products: [
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
    ],
  };
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
            <div className="my-4">
              <ProductList products={data.products} />
            </div>

            <div className="mx-auto">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
