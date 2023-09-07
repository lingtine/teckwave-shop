"use client";

import Button from "../button/button";
import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { formatPrice } from "~/utils/formatPrice";

import { useAddProductMutation } from "~/redux/services/orders/cart-api";
import { Rating } from "@material-tailwind/react/components/Rating";
import { useRouter } from "next/navigation";
function ProductCart({ product }) {
  const { accessToken } = useSelector((state) => state.authSlice);
  const router = useRouter();
  const [addProduct, result] = useAddProductMutation();

  //function
  useEffect(() => {
    if (result.isSuccess) {
      toast.success("Add product succeeded");
    }
    if (result.isError) {
      toast.error("error");
    }
  }, [result.isSuccess, result.isError]);

  const handleAddToCart = () => {
    if (accessToken) {
      addProduct({
        productId: product.id,
        productName: product.name,
        quantity: 1,
        unitPrice: product.unitPrice,
      });
    } else {
      toast.info("You must log in first");
      router.push("/login");
    }
  };

  return (
    <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <Link href={`/${product.name}/${product.id}`}>
        <div className="relative h-48 w-full mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <Image
            alt={product.name}
            src={product.imageUrl}
            fill
            sizes="w-full h-full"
            className="object-contain"
          />
        </div>
        <div className="p-6 mt-4">
          <div className="mb-2 flex flex-col min-h-[82px]">
            <h5 className="line-clamp-1 font-sans text-lg font-bold leading-relaxed text-blue-gray-900 antialiased">
              {product.name}
            </h5>
            <Rating value={product.numberOfStar} readonly />
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {formatPrice(product.unitPrice)}
            </p>
          </div>
        </div>
      </Link>
      <div className="p-4 pt-0">
        {product.isInStock ? (
          <Button
            full
            secondary
            className="font-bold"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        ) : (
          <div className="font-bold py-1 text-center">Out Of Stock</div>
        )}
      </div>
    </div>
  );
}

export default ProductCart;
