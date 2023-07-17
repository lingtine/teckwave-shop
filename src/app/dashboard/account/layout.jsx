import Link from "next/link";

function AccountLayout({ children }) {
  return (
    <div suppressHydrationWarning={true} className="container mx-auto">
      <div className="flex gap-10">
        <div className="max-w-[254px]">
          <div>
            <h4 className="text-lg font-semibold">Manage My Account</h4>
            <ul className="pl-8 my-2">
              <li className="py-1 text-base text-color-text-black hover:text-secondary-3  ">
                <Link href={"/dashboard/account/my-account"}>My Profile</Link>
              </li>
              <li className="py-1 text-base text-color-text-black hover:text-secondary-3  ">
                <Link href={"/dashboard/account/my-address"}>Address Book</Link>
              </li>
              <li className="py-1 text-base text-color-text-black hover:text-secondary-3  ">
                <Link href={"/dashboard/account/my-orders"}>My Orders</Link>
              </li>
              <li className="py-1 text-base text-color-text-black hover:text-secondary-3">
                <Link href={"/dashboard/account/my-orders"}>
                  Reset Password
                </Link>
              </li>
              <li className="py-1 text-base text-color-text-black  ">
                <button>Log out</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex 1">{children}</div>
      </div>
    </div>
  );
}

export default AccountLayout;
