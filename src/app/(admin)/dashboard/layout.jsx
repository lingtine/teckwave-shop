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
    <div className="flex">
      <div className="w-[280px]">
        <SideBar />
      </div>
      <div className="flex-1 ">
        <div className="flex justify-between items-center py-8">
          <Link
            href={"/admin/dashboard"}
            className={
              "text-color-text-black text-4xl text-center font-medium "
            }
          >
            Techwave
          </Link>
          <div>User</div>
        </div>
        {children}
      </div>
    </div>
  );
}
