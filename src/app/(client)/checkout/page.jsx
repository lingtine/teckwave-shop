"use client";
import Image from "next/image";
import Input from "~/app/components/input/input";

import { useGetAllCouponQuery } from "~/redux/services/discount/coupon-api";

function Checkout() {
  const { data: couponData } = useGetAllCouponQuery();

  const data = [
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-4xl">Billing Details</h2>
      <div className="flex justify-between ">
        <div className=" bg-white py-8 rounded-lg">
          <h3 className="my-8 text-xl font-bold ">Delivery Information</h3>
          <div className="min-w-[470px]">
            <Input label={"email"} />
          </div>
        </div>
        <div className="p-8 bg-white rounded-xl h-fit w-full max-w-md ">
          <h3 className="text-xl my-8 font-bold dark:text-white">
            Order Summary
          </h3>

          <ul className="my-8  max-h-80 overflow-y-scroll">
            {data.map((product) => (
              <li className="flex justify-between w-full items-center">
                <div className="flex items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="h-full"
                  />
                  <div>
                    <h4 className="text-base">{product.name}</h4>
                    <h5 className="text-xs text-gray-400 leading-normal">
                      {product.subTile}
                    </h5>
                    <p className="text-base">{product.price}</p>
                  </div>
                </div>
                <div>{product.quality}</div>
              </li>
            ))}
          </ul>

          <div className="">
            <div className="flex justify-between py-4 border-b">
              <h5>Subtotal</h5>
              <p className="font-bold">30000</p>
            </div>
            <div className="flex justify-between py-4 border-b">
              <h5>Shipping</h5>
              <p className="font-bold">30000</p>
            </div>
          </div>
          <div className="flex justify-between my-4 text-xl">
            <h5>Total</h5>
            <p className="font-bold">30000</p>
          </div>
          <button className="block text-center py-3 border bg-secondary-3 text-white w-full rounded hover:opacity-90">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
