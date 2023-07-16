import Link from "next/link";

function HeaderNavigation() {
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
        <Link
          href={"/dashboard/register"}
          className="text-base mx-4 text-color-text-black hover:underline"
        >
          Sign Up
        </Link>
      </li>
    </ul>
  );
}

export default HeaderNavigation;
