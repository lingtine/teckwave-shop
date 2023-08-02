"use client";

import { useState } from "react";

import ProductList from "~/app/components/products/product-list";
import BoxProducts from "~/app/components/home-page/box-products";
import Button from "~/app/components/button/button";

function WishList() {
  const [valueSorted, setValueSorted] = useState(null);

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

  return (
    <div className="container mx-auto my-16">
      <div className="">
        <div className="flex justify-between items-center my-8">
          <div>
            <h3 className="text-xl">WishList({data.products.length})</h3>
          </div>
          <Button secondary normal>
            view
          </Button>
        </div>
        <ProductList products={data.products} />
      </div>

      <BoxProducts type={"Just For You"}>
        <ProductList products={data.products} />
      </BoxProducts>
    </div>
  );
}

export default WishList;
