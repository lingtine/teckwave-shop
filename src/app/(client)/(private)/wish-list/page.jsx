"use client";
import Link from "next/link";
import BoxProducts from "~/app/components/home-page/box-products";
import Button from "~/app/components/button/button";
import { useGetWishListQuery } from "~/redux/services/customer/customer-api";
import { useSelector } from "react-redux";
import { BsFillBagHeartFill } from "react-icons/bs";
import ProductList from "~/app/components/products/product-list";

function WishList() {
  const user = useSelector((state) => state.user);
  const { wishList } = useSelector((state) => state.wishListSlice);
  let renderWishList;

  const handleRemove = () => {};
  if (wishList) {
    if (wishList.length !== 0)
      renderWishList = (
        <div className="">
          <div className="flex justify-between items-center my-8">
            <div>
              <h3 className="text-xl">WishList({wishList.length})</h3>
            </div>
            <div></div>
          </div>
        </div>
      );
    else {
      renderWishList = (
        <div className="text-4xl flex-col flex justify-center items-center my-60">
          <div className="flex">
            <BsFillBagHeartFill />
            <h4 className="mx-8">The wishList is empty</h4>
          </div>
          <div className="my-12">
            <Link
              className="text-xl border py-4 px-8 rounded-md bg-secondary-3 text-primary"
              href={"/"}
            >
              Continue shopping
            </Link>
          </div>
        </div>
      );
    }
  }
  return (
    <div className="container mx-auto my-16">
      {renderWishList}

      {/* <BoxProducts type={"Just For You"}>
        <ProductList products={data.products || []} />
      </BoxProducts> */}
    </div>
  );
}

export default WishList;
