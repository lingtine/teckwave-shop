"use client";

import { useState } from "react";

import ProductList from "~/app/components/products/product-list";
import BoxProducts from "~/app/components/home-page/box-products";
import Button from "~/app/components/button/button";
import { useGetWishListQuery } from "~/redux/services/customer/customer-api";
function WishList() {
  const { data } = useGetWishListQuery();

  if (!data) {
    return <div></div>;
  }
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
        <ProductList products={data.products || []} />
      </div>

      <BoxProducts type={"Just For You"}>
        <ProductList products={data.products || []} />
      </BoxProducts>
    </div>
  );
}

export default WishList;
