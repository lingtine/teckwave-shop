"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

function HeaderNavigation() {
  const { user } = useSelector((state) => state.userSlice);

  const configData = [
    {
      content: "Home",
      href: "/",
    },
    {
      content: "Contact",
      href: "/contact",
    },
    {
      content: "About",
      href: "/about",
    },
    {
      content: !user ? "Login" : "Wish List",
      href: !user ? "/login" : "/wish-list",
    },
  ];

  const renderData = configData.map((nav, index) => (
    <li key={index}>
      <Link
        href={nav.href}
        className="text-base mx-4 text-color-text-black hover:underline"
      >
        {nav.content}
      </Link>
    </li>
  ));

  return <ul className="flex justify-between items-center">{renderData}</ul>;
}

export default HeaderNavigation;
