"use client";

import Image from "next/image";
import { TiDelete } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import InputQuantity from "~/app/components/input-quanlity/input-quanlity";
import { useGetCartDetailQuery } from "~/redux/services/orders/cart-api";
import { useSelector } from "react-redux";
import { TbShoppingCartPlus } from "react-icons/tb";
function CartPage() {
  const { cart } = useSelector((state) => state.cart);

  let renderPage;
  if (cart) {
    if (cart.items.length === 0) {
      renderPage = (
        <div className=" min-h-[400px] flex-col flex justify-center items-center">
          <div className="text-6xl">
            <TbShoppingCartPlus />
          </div>

          <h4 className="text-4xl my-8 font-semibold ">The cart is empty</h4>
          <Link
            className="py-2 px-4 border bg-secondary-3 text-primary rounded-lg"
            href={"/"}
          >
            Back to shop
          </Link>
        </div>
      );
    } else {
      // renderPage = (
      //   <div className="grid grid-flow-col grid-cols-3 gap-4">
      //     <div className="col-span-2 bg-white p-8 shadow-lg rounded-lg">
      //       <div>
      //         <ul className="flex justify-between items-center py-4">
      //           <li className="min-w-[360px]">Item</li>
      //           <div className="flex justify-between flex-1">
      //             <li className="">Price</li>
      //             <li className="">Quantity</li>
      //             <li className="">Subtotal</li>
      //           </div>
      //         </ul>
      //       </div>
      //       {/* <ul>{renderCart}</ul> */}
      //       <Link
      //         href={"/"}
      //         className="my-2 flex items-center p-4 rounded-md border font-medium text-gray-800 text-base hover:bg-secondary-3 hover:text-primary w-fit"
      //       >
      //         <IoIosArrowBack />
      //         <span className="ml-4">Continue Shopping</span>
      //       </Link>
      //     </div>
      //     <div className="p-8 bg-white rounded h-fit border border-primary-1">
      //       <h3 className="text-1xl font-bold dark:text-white">Summary</h3>
      //       <div className="">
      //         <div className="flex justify-between py-4 border-b ">
      //           <h5>Subtotal:</h5>
      //           <p className="font-bold">30000</p>
      //         </div>
      //         <div className="flex justify-between py-4 border-b">
      //           <h5>Shipping:</h5>
      //           <p className="font-bold">30000</p>
      //         </div>
      //       </div>
      //       <div className="flex justify-between my-4 text-xl">
      //         <h5>Total</h5>
      //         <p className="font-bold">30000</p>
      //       </div>
      //       <Link
      //         href={"/checkout"}
      //         className="block text-center py-3 border bg-secondary-3 text-primary w-full rounded-lg hover:opacity-90"
      //       >
      //         Check out
      //       </Link>
      //     </div>
      //   </div>
      // );
    }
  }

  // if (isSuccess) {
  // renderCart = data.map((product) => (
  //   <li className=" py-8 flex border-t last:border-b justify-between">
  //     <div className="min-w-[360px] flex items-center relative group/item">
  //       <Image src={product.image} alt={product.name} height={80} width={80} />
  //       <div className="flex flex-col justify-center ml-5">
  //         <h5>{product.name}</h5>
  //         <p>{product.subTile}</p>
  //       </div>
  //       <div className="hidden group-hover/item:block  cursor-pointer absolute p-2 text-lg top-0 -left-2 text-secondary-3">
  //         <TiDelete />
  //       </div>
  //     </div>
  //     <div className="flex flex-1 justify-between items-center">
  //       <div className="">{product.price}</div>
  //       <div className="flex items-center">
  //         <InputQuantity quantity={product.quality} />
  //       </div>
  //       <div className=" flex items-center">
  //         {product.price * product.quality}
  //       </div>
  //     </div>
  //   </li>
  // ));
  //}

  return (
    <div className="container mx-auto my-8">
      <h2 className="my-8 text-3xl font-bold ">Shopping Cart</h2>
      {renderPage}
    </div>
  );
}

export default CartPage;
