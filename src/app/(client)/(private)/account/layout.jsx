"use client";

import Link from "next/link";
import classNames from "classnames";
import { useLogoutMutation } from "~/redux/services/authentication/auth-api";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelectedLayoutSegment } from "next/navigation";
import Button from "~/app/components/button/button";

function AccountLayout({ children }) {
  const [logout, { isSuccess }] = useLogoutMutation();
  const router = useRouter();

  const segment = useSelectedLayoutSegment();
  useEffect(() => {
    document.title = "Account";
  }, []);
  const nav = [
    {
      label: "My Profile",
      href: "/account/my-account",
      current: "my-account" === segment,
    },
    {
      label: "Address Book",
      href: "/account/my-address",
      current: "my-address" === segment,
    },
    {
      label: "My Orders",
      href: "/account/my-orders",
      current: "my-orders" === segment,
    },
    // {
    //   label: "Rest Password",
    //   href: "/account/reset-password",
    //   current: "reset-password" === segment,
    // },
  ];

  const renderNav = nav.map((item, index) => {
    return (
      <li
        key={index}
        className={classNames(
          "py-1 text-base text-color-text-black hover:text-secondary-3",
          { "text-secondary-3": item.current }
        )}
      >
        <Link href={item.href}>{item.label}</Link>
      </li>
    );
  });

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/");
    }
  }, [isSuccess, router]);
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
              {renderNav}
              <li className="py-1 text-base text-color-text-black my-8 ">
                <Button small secondary onClick={handleLogout}>
                  Log out
                </Button>
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
