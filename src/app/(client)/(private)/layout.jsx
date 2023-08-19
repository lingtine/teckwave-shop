"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function LayoutPrivate({ children }) {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);
  return children;
}

export default LayoutPrivate;
