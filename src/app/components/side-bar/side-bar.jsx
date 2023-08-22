"use client";

import Link from "next/link";
import { BiHomeAlt, BiUserCircle } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { useSelectedLayoutSegment } from "next/navigation";
import classNames from "classnames";

function SideBar() {
  const segment = useSelectedLayoutSegment();

  const nav = [
    {
      label: "DashBoard",
      href: "/dashboard",
      current: segment === null,
      icon: <BiHomeAlt />,
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
      icon: <LiaFileInvoiceDollarSolid />,
    },
    {
      label: "Brands",
      href: "/dashboard/brands",
      current: segment === "brands",
      icon: <LiaFileInvoiceDollarSolid />,
    },
    {
      label: "Warehouse",
      href: "/dashboard/warehouse",
      current: segment === "warehouse",
      icon: <LiaFileInvoiceDollarSolid />,
    },
    {
      label: "Supplier",
      href: "/dashboard/supplier",
      current: segment === "supplier",
      icon: <LiaFileInvoiceDollarSolid />,
    },
    {
      label: "Report",
      href: "/dashboard/report",
      current: segment === "report",
      icon: <LiaFileInvoiceDollarSolid />,
    },
  ];

  const renderNav = nav.map((item, index) => {
    return (
      <li key={index}>
        <Link
          className={classNames(
            "flex items-center px-2 py-4  rounded-md hover:bg-secondary-3 hover:text-primary ",
            {
              "bg-secondary-3 text-primary": item.current,
            }
          )}
          href={item.href}
        >
          {item.icon}
          <span className="mx-2">{item.label}</span>
        </Link>
      </li>
    );
  });
  return <ul className="">{renderNav}</ul>;
}

export default SideBar;
