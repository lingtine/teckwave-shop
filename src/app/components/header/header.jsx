import Link from "next/link";

import SearchBar from "../search-bar/search-bar";
import { montserrat } from "~/app/fonts";
import { BsCart3 } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import classNames from "classnames";
import TopBar from "./top-bar";
import HeaderNavigation from "./header-navigation";

function Header() {
  return (
    <header className="min-h-[142px] border-b">
      <TopBar />
      <div className="container mx-auto mt-7">
        <div className="flex items-center gap-[147px] w-full">
          <div className="flex justify-between items-center flex-1">
            <Link
              href={"/"}
              className={classNames(
                "text-color-text-black text-4xl text-center font-medium ",
                montserrat.className
              )}
            >
              Techwave
            </Link>
            <HeaderNavigation />
          </div>
          <div className="flex items-center">
            <SearchBar />
            {/* <div className="flex items-center justify-evenly gap-2">
               <Link
                className="flex items-center justify-around px-2 py-1.5 bg-teal-800 hover:bg-teal-500 text-white rounded-xl"
                href="/order-check"
              >
                <LiaShippingFastSolid className="text-2xl" />
                <span className="m-2 text-xs">Kiểm tra đơn hàng</span>
              </Link> 
            </div> */}
            <Link className="flex items-center relative" href="/cart">
              <BsCart3 className="text-3xl text-color-black ml-6 hover:text-teal-500"></BsCart3>
              <span className="absolute text-xs -right-1.5 bottom-4 bg-red-500 text-white py-0.5 px-1 rounded shadow-lg ">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
