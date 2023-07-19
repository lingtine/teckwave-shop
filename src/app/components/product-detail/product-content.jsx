"use client";

import Button from "../button/button";
import InputQuantity from "../input-quanlity/input-quanlity";

import ProductImageContent from "./product-image-content";
import { TbTruckDelivery } from "react-icons/tb";
import { HiArrowPath } from "react-icons/hi2";
function ProductContent({ product }) {
  return (
    <div className="flex -mx-[35px] my-10">
      <div className="flex-[0_0_62.5%] max-w-[62.5%] px-[35px]">
        <ProductImageContent images={product.images} />
      </div>
      <div className="flex-[0_0_37.5%] max-w-[0_0_37.5%] px-[35px]">
        <div className="pb-4 border-b border-b-color-text-black">
          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <p className="text-2xl font-medium my-4">{product.price}</p>
          <p className="text-sm font-medium text-justify">{product.describe}</p>
        </div>
        <div className=" flex py-8 items-center">
          <InputQuantity quantity={1}></InputQuantity>
          <Button secondary className="mx-4 px-2 inline-block ">
            Buy Now
          </Button>
        </div>
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
