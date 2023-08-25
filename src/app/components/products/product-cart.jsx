"use client";

import Button from "../button/button";
import Image from "next/image";
import Link from "next/link";
import { BiCartAdd } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import {
  useAddToWishListMutation,
  useRemoveToWishListMutation,
} from "~/redux/services/customer/customer-api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useDebounce from "~/hooks/use-debounce";
function ProductCart({ product }) {
  const { user } = useSelector((state) => state.user);
  const { wishList } = useSelector((state) => state.wishListSlice);
  const found = wishList?.find((item) => item.productId === product.id);
  const [status, setStatus] = useState(!!found);
  const debounceValue = useDebounce(status, 500);

  const [addWistList, resultAddWishList] = useAddToWishListMutation();
  const [removeWistList, resultRemoveWishList] = useRemoveToWishListMutation();
  const handleAddProduct = () => {};
  let numberFormat = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  useEffect(() => {
    if (resultAddWishList.isSuccess) {
      toast.success("Add to wish list success");
    }
  }, [resultAddWishList.isSuccess]);
  useEffect(() => {
    if (resultRemoveWishList.isSuccess) {
      toast.success("Remove to wish list success");
    }
  }, [resultRemoveWishList.isSuccess]);
  useEffect(() => {
    if (debounceValue) {
      addWistList(product.id);
    } else {
      removeWistList(product.id);
    }
  }, [debounceValue]);
  const renderAction = (
    <div>
      <div
        onClick={() => {
          setStatus(!status);
        }}
        className="absolute text-xl text-secondary-3 p-2.5 rounded-full right-1  top-6"
      >
        {status ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>
      <div
        onClick={handleAddProduct}
        className="cursor-pointer absolute group-hover:block hidden bg-secondary-3 text-white p-2.5 rounded-full right-4 top-[50%] text-lg text-center"
      >
        <BiCartAdd />
      </div>
    </div>
  );

  return (
    <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <Link href={`/${product.name}/${product.id}`}>
        <div className="relative mx-4 mt-4 h-48 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <Image
            alt={product.name}
            src={product.imageUrl}
            fill
            className="object-contain"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex flex-col min-h-[82px]">
            <h5 className="line-clamp-2 font-sans text-lg font-bold leading-relaxed text-blue-gray-900 antialiased">
              {product.name}
            </h5>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {numberFormat.format(product.unitPrice)}
            </p>
          </div>
        </div>
      </Link>
      <div className="p-6 pt-0">
        <Button full secondary className="font-bold">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCart;
