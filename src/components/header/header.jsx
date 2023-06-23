import Link from "next/link";

import SearchBar from "../search-bar/search-bar";
import { montserrat } from "~/app/fonts";
import { BsCart3 } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import classNames from "classnames";
import TopBar from "./top-bar";

function Header() {
  return (
    <header>
      <TopBar />
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4 py-3 items-center">
          <Link
            href={"/"}
            className={classNames(
              "text-emerald-500 text-4xl text-center font-medium ",
              montserrat.className
            )}
          >
            Techwave
          </Link>
          <div className="col-span-2">
            <SearchBar />
          </div>
          <div className="flex items-center justify-evenly gap-2">
            <Link
              className="flex items-center justify-around px-2 py-1.5 bg-teal-800 hover:bg-teal-500 text-white rounded-xl"
              href="/order-check"
            >
              <LiaShippingFastSolid className="text-2xl" />
              <span className="m-2 text-xs">Kiểm tra đơn hàng</span>
            </Link>
            <Link className="flex items-center relative" href="/cart">
              <BsCart3 className="text-3xl text-teal-800 hover:text-teal-500"></BsCart3>
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
