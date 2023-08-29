"use client";

import Button from "../button/button";
import InputQuantity from "../input-quanlity/input-quanlity";
import { formatPrice } from "~/utils/formatPrice";
import ProductImageContent from "./product-image-content";
import { TbTruckDelivery } from "react-icons/tb";
import { HiArrowPath } from "react-icons/hi2";
import { useAddProductMutation } from "~/redux/services/orders/cart-api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function ProductContent({ product }) {
  const [addCart, { isSuccess, isLoading, isError }] = useAddProductMutation();
  const { user } = useSelector((state) => state.user);
  const [value, setValue] = useState(1);
  const router = useRouter();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Add to cart Success");
    }
  }, [isSuccess]);
  const handleAddToCart = () => {
    if (!user) {
      toast.info("You must login first");
      router.push("/login");
    } else {
      addCart({
        productId: product.id,
        productName: product.name,
        quantity: value,
        unitPrice: product.unitPrice,
      });
    }
  };

  let handleAction;
  if (product.isInStock) {
    handleAction = (
      <>
        <InputQuantity onChange={setValue} quantity={value}></InputQuantity>
        <Button
          onClick={handleAddToCart}
          secondary
          small
          className="mx-4 px-2 inline-block"
        >
          Buy Now
        </Button>
      </>
    );
  } else {
    handleAction = (
      <div className="uppercase font-bold text-lg text-secondary-3">
        Out of Stock
      </div>
    );
  }

  return (
    <div className="flex -mx-[35px] my-10">
      <div className="flex-[0_0_62.5%] max-w-[62.5%] px-[35px]">
        <ProductImageContent
          imageUrl={product.imageUrl}
          images={product.productImages}
          alt={product.name}
        />
      </div>
      <div className="flex-[0_0_37.5%] max-w-[0_0_37.5%] px-[35px]">
        <div className="pb-4 border-b border-b-color-text-black">
          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <p className="text-2xl font-medium my-4">
            {formatPrice(product.unitPrice)}
          </p>
          <p className="text-sm font-medium text-justify">
            {product.description}
          </p>
        </div>
        <div className="flex py-8 items-center">{handleAction}</div>
        <div className="mb-8">
          <div className="flex items-center p-4 border rounded-t-md  border-color-text-black">
            <div className="text-4xl ">
              <TbTruckDelivery />
            </div>
            <div className="mx-4">
              <h6 className="text-base font-semibold">Free Delivery</h6>
              <p className="text-sm">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-b-md border-t-transparent border-color-text-black">
            <div className="text-4xl ">
              <HiArrowPath />
            </div>
            <div className="mx-4">
              <h6 className="text-base font-semibold">Return Delivery</h6>
              <p className="text-sm">Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductContent;
