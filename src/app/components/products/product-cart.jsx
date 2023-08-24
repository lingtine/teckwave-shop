"use client";
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
    <div className="relative group">
      <Link
        href={`/san-pham/${product.id}`}
        className="flex flex-col p-2 bg-white rounded-xl justify-between shadow-xl min-h-[250px]"
      >
        <div className="flex justify-center w-full my-8  items-center">
          <Image
            alt={product.name}
            src={product.imageUrl}
            width={70}
            height={50}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col px-4">
          <h5 className="uppercase font-semibold text-sm text-center">
            {product.name}
          </h5>
          <div className="text-center my-1 text-secondary-3 font-semibold ">
            {numberFormat.format(product.unitPrice)}
          </div>
        </div>
      </Link>
      {user && renderAction}
    </div>
  );
}

export default ProductCart;
