"use client";
import Link from "next/link";

import { useSelector } from "react-redux";
import { BsFillBagHeartFill } from "react-icons/bs";

import { useEffect } from "react";

function WishList() {
  // let renderWishList;
  useEffect(() => {
    document.title = "Wish List";
  }, []);

  // if (wishList) {
  //   if (wishList.length !== 0)
  //     renderWishList = (
  //       <div className="">
  //         <div className="flex justify-between items-center my-8">
  //           <div>
  //             <h3 className="text-xl">WishList({wishList.length})</h3>
  //           </div>
  //           <div></div>
  //         </div>
  //       </div>
  //     );
  //   else {
  //     renderWishList = (

  //     );
  //   }
  // }
  return (
    <div className="container mx-auto my-16">
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
    </div>
  );
}

export default WishList;
