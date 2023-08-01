"use client";

import Link from "next/link";
import { BiHomeAlt, BiUserCircle } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

import { usePathname } from "next/navigation";
import classNames from "classnames";

function SideBar() {
  const pathname = usePathname();
  const page = pathname.split("/")[2];

  return (
    <ul className="">
      <li>
        <Link
          className={classNames(
            "flex items-center px-2 py-4  rounded-md hover:bg-secondary-3 hover:text-primary ",
            {
              "bg-secondary-3 text-primary": page === "dashboard",
            }
          )}
          href={"/admin/dashboard"}
        >
          <BiHomeAlt />
          <span className="mx-2">DashBoard</span>
        </Link>
      </li>
      <li>
        <Link
          className={classNames(
            "flex items-center px-2 py-4  rounded-md hover:bg-secondary-3 hover:text-primary ",
            {
              "bg-secondary-3 text-primary": page === "orders",
            }
          )}
          href={"/admin/orders"}
        >
          <LiaFileInvoiceDollarSolid />
          <span className="mx-2">Orders</span>
        </Link>
      </li>
      <li>
        <Link
          className={classNames(
            "flex items-center px-2 py-4  rounded-md hover:bg-secondary-3 hover:text-primary ",
            {
              "bg-secondary-3 text-primary": page === "products",
            }
          )}
          href={"/admin/products"}
        >
          <BsCart />
          <span className="mx-2">Products</span>
        </Link>
      </li>
      <li>
        <Link
          className={classNames(
            "flex items-center px-2 py-4  rounded-md hover:bg-secondary-3 hover:text-primary ",
            {
              "bg-secondary-3 text-primary": page === "customers",
            }
          )}
          href={"/admin/customers"}
        >
          <BiUserCircle />
          <span className="mx-2">Customer</span>
        </Link>
      </li>
    </ul>
  );
}

export default SideBar;
