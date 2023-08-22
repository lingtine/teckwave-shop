"use client";

import ProductList from "~/app/components/products/product-list";
import BoxProducts from "~/app/components/home-page/box-products";
import Button from "~/app/components/button/button";
import {
  useGetWishListQuery,
  useRemoveToWishListMutation,
} from "~/redux/services/customer/customer-api";
import { useSelector } from "react-redux";

function WishList() {
  const { data, isSuccess, isLoading } = useGetWishListQuery();
  const [remove, result] = useRemoveToWishListMutation();
  const user = useSelector((state) => state.user);
  let renderWishList;
  if (isLoading) {
    renderWishList = <div>Loading...</div>;
  }
  const handleRemove = () => {};
  if (isSuccess) {
    return (
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
    );
  }
  return (
    <div className="container mx-auto my-16">
      {renderWishList}

      <BoxProducts type={"Just For You"}>
        <ProductList products={data.products || []} />
      </BoxProducts>
    </div>
  );
}

export default WishList;
