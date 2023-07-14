import Link from "next/link";

function Topbar() {
  return (
    <div className="bg-color-black">
      <div className="container mx-auto">
        <div className="flex justify-center p-2.5">
          <p className="text-color-text-primary text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link
              href="/"
              className="text-color-text-primary text-base px-2 underline "
            >
              ShopNow
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
