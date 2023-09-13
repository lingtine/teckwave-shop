"use client";
import Button from "../button/button";
import Link from "next/link";
import { TbReportAnalytics } from "react-icons/tb";
import { BiHomeAlt, BiUserCircle } from "react-icons/bi";
import { IoExitOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { useSelectedLayoutSegment } from "next/navigation";
import classNames from "classnames";
import { useLogoutMutation } from "~/redux/services/authentication/auth-api";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Fragment } from "react";
import Image from "next/image";
import { BsHouse } from "react-icons/bs";
import { BsMinecartLoaded } from "react-icons/bs";
import { FaWarehouse } from "react-icons/fa";

function SideBar() {
  const segment = useSelectedLayoutSegment();
  const router = useRouter();
  const [logout, { isSuccess }] = useLogoutMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Logout succeeded");
      router.push("/login-admin");
    }
  }, [isSuccess, router]);
  const nav = [
    {
      label: "Dashboard",
      href: "/dashboard",
      current: segment === null,
      icon: <BsHouse />,
    },
    {
      label: "Orders",
      href: "/dashboard/orders",
      current: segment === "orders",
      icon: <BsCart />,
    },
    {
      label: "Customer",
      href: "/dashboard/customers",
      current: segment === "customers",
      icon: <BiUserCircle />,
    },
    {
      label: "Products",
      href: "/dashboard/products",
      current: segment === "products",
      icon: <BsMinecartLoaded />,
    },
    {
      label: "Warehouse",
      href: "/dashboard/warehouse",
      current: segment === "warehouse",
      icon: <FaWarehouse />,
    },
  ];

  const renderNav = nav.map((item, index) => {
    return (
      <Fragment key={index}>
        <Link
          className={classNames(
            "flex gap-4 min-w-[150px] items-center text-secondary-6 opacity-60 p-3 hover:opacity-100 hover:bg-[#222] rounded-md text-xl",
            {
              "opacity-100 bg-[#222]": item.current,
            }
          )}
          href={item.href}
        >
          {item.icon}
          <span className="text-base">{item.label}</span>
        </Link>
      </Fragment>
    );
  });
  return (
    <div className="bg-primary-2 pt-4 pb-12 pl-8 pr-20 flex flex-col items-start justify-between fixed h-full">
      <div className="flex justify-center flex-col items-start gap-6">
        <div className="flex items-center gap-4 border-b pb-8 border-b-gray-600 ">
          <span className="relative bg-primary p-4 rounded-md ">
            <Image
              src={"/images/logo/logo-1.png"}
              width={16}
              height={16}
            ></Image>
          </span>
          <p className="text-primary text-xl font-semibold">Techwave</p>
        </div>

        {renderNav}
      </div>

      <button className="flex gap-4 min-w-[150px] items-center text-secondary-6 opacity-60 p-3 hover:opacity-100 hover:bg-[#222] rounded-md text-xl ">
        <span className="rotate-180">
          <IoExitOutline />
        </span>
        <span className="text-base">Logout</span>
      </button>
    </div>
  );
}

export default SideBar;
