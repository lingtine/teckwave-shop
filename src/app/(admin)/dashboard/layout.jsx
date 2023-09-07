"use client";
import SideBar from "~/app/components/side-bar/side-bar";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
export default function AdminLayout({ children }) {
  const { accessToken } = useSelector((state) => state.authSlice);
  const router = useRouter();
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  useEffect(() => {
    if (!accessToken) {
      router.push("/login-admin");
    } else {
      const info = jwtDecode(accessToken);
      console.log(info);
      if (info?.role === "Customer") {
        router.push("/login-admin");
        toast.info("You are not Admin");
      }
    }
  }, [accessToken, router]);

  return (
    <div className="px-8">
      <div className="flex justify-between items-center py-8">
        <Link
          href={"/admin/dashboard"}
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
