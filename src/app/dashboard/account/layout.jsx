"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
function AccountLayout({ children }) {
  const pathname = usePathname();
  const page = pathname.split("/")[3];
  return (
    <div
      suppressHydrationWarning={true}
      className="container mx-auto py-[80px]"
    >
      <div className="flex gap-10">
        <div className="max-w-[254px]">
          <div>
            <h4 className="text-lg font-semibold">Manage My Account</h4>
            <ul className="pl-8 my-2">
              <li
                className={classNames(
                  "py-1 text-base text-color-text-black hover:text-secondary-3",
                  { "text-secondary-3": page === "my-account" }
                )}
              >
                <Link href={"/dashboard/account/my-account"}>My Profile</Link>
              </li>
              <li
                className={classNames(
                  "py-1 text-base text-color-text-black hover:text-secondary-3",
                  { "text-secondary-3": page === "my-address" }
                )}
              >
                <Link href={"/dashboard/account/my-address"}>Address Book</Link>
              </li>
              <li
                className={classNames(
                  "py-1 text-base text-color-text-black hover:text-secondary-3",
                  { "text-secondary-3": page === "my-orders" }
                )}
              >
                <Link href={"/dashboard/account/my-orders"}>My Orders</Link>
              </li>
              <li
                className={classNames(
                  "py-1 text-base text-color-text-black hover:text-secondary-3",
                  { "text-secondary-3": page === "reset-password" }
                )}
              >
                <Link href={"/dashboard/account/reset-password"}>
                  Reset Password
                </Link>
              </li>
              <li className="py-1 text-base text-color-text-black  ">
                <button>Log out</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

export default AccountLayout;
