"use client";

import Link from "next/link";
import SearchBar from "../search-bar/search-bar";
import { montserrat } from "~/app/fonts";
import { BsCart3 } from "react-icons/bs";
import { LuUser } from "react-icons/lu";
import classNames from "classnames";
import TopBar from "./top-bar";
import HeaderNavigation from "./header-navigation";
import { useSelector } from "react-redux";
import { useLogoutMutation } from "~/redux/services/authentication/auth-api";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
function Header() {
  const { user } = useSelector((state) => state.user);
  const { cart, quantity } = useSelector((state) => state.cart);
  const [logout, { isSuccess }] = useLogoutMutation();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push("/");
    }
  }, [isSuccess, user, cart, router, quantity]);
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

            <Link
              className="flex items-center relative"
              href={user ? "/cart" : "/login"}
            >
              <BsCart3 className="text-3xl text-color-black ml-6 hover:text-secondary-3"></BsCart3>
              {cart && quantity && (
                <span className="absolute text-xs -right-1.5 bottom-4 bg-red-500 text-white py-0.5 px-1 rounded shadow-lg ">
                  {quantity}
                </span>
              )}
            </Link>
            {user && (
              <div className="flex items-center relative group/sub-item  ">
                <Link href="/account/my-account">
                  <LuUser className=" text-3xl text-color-black ml-6 hover:text-secondary-3" />
                </Link>
                <div className="absolute hidden group-hover/sub-item:block bg-white min-w-[150px] w-fit p-2 top-10 right-0 rounded-md shadow-lg before:w-full before:-top-3 before:left-0 before:absolute before:h-[15px] before:bg-transparent z-50">
                  <ul>
                    <li className="py-2 px-2 border-b hover:text-secondary-3  ">
                      <Link href="/account/my-account">My Account</Link>
                    </li>
                    <li className="py-2 px-2 border-b hover:text-secondary-3  ">
                      <Link href="/account/my-address">My Address</Link>
                    </li>
                    <li className="py-2 px-2 border-b hover:text-secondary-3  ">
                      <Link href="/account/my-orders">My Orders</Link>
                    </li>
                    <li className="py-2 px-2 border-b hover:text-secondary-3  ">
                      <button
                        onClick={() => {
                          logout();
                          router.push("/");
                        }}
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
