"use client";
import Image from "next/image";
import Link from "next/link";
import { BiCartAdd } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import {
  useAddToWishListMutation,
  useRemoveToWishListMutation,
} from "~/redux/services/customer/customer-api";
function ProductCart({ product }) {
  const [status, setStatus] = useState(false);
  const handleAddProduct = () => {};
  let numberFormat = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });

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
        href={"/san-pham/" + "iphone"}
        className="flex flex-col p-2 bg-white rounded-xl shadow-xl"
      >
        <div className="flex justify-center w-full my-8">
          <Image
            alt={product.name}
            src={product.image}
            width={150}
            height={180}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col px-4">
          <h5 className="uppercase font-semibold text-sm text-center">
            {product.name}
          </h5>
          <div className="text-center my-1 text-secondary-3 font-semibold ">
            {numberFormat.format(product.price)}
          </div>
        </div>
      </Link>
      {renderAction}
    </div>
  );
}

export default ProductCart;
