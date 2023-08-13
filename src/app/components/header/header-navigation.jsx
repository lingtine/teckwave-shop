"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
function HeaderNavigation() {
  const { user } = useSelector((state) => state.user);

  return (
    <ul className="flex justify-between items-center">
      <li>
        <Link
          href={"/"}
          className="text-base mx-4 text-color-text-black hover:underline"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/contact"}
          className="text-base mx-4 text-color-text-black hover:underline"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          href={"/about"}
          className="text-base mx-4 text-color-text-black hover:underline"
        >
          About
        </Link>
      </li>
      <li>
        {user === null ? (
          <Link
            href={"/dashboard/register"}
            className="text-base mx-4 text-color-text-black hover:underline"
          >
            Sign Up
          </Link>
        ) : (
          <Link
            href={"/wish-list"}
            className="text-base mx-4 text-color-text-black hover:underline"
          >
            Wish List
          </Link>
        )}
      </li>
    </ul>
  );
}

export default HeaderNavigation;
