"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function LayoutPrivate({ children }) {
  const { accessToken } = useSelector((state) => state.authSlice);
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    }
  }, [accessToken, router]);
  return children;
}

export default LayoutPrivate;
