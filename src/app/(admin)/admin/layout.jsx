import SideBar from "~/app/components/side-bar/side-bar";
import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="px-8">
      <div className="flex justify-between items-center py-8">
        <Link
          href={"/admin"}
          className={"text-color-text-black text-4xl text-center font-medium "}
        >
          Techwave
        </Link>
        <div>User</div>
      </div>
      <div className="flex">
        <div className="max-w-[200px] flex-[0_0_50%] px-2">
          <SideBar />
        </div>
        <div className="flex-1 px-4">{children}</div>
      </div>
    </div>
  );
}
