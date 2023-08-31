"use client";

import "~/styles/globals.css";
import { Header, Footer } from "~/app/components";
import { useGetCustomerQuery } from "~/redux/services/customer/customer-api";
import { getCookie } from "cookies-next";
import { useGetEmployeeQuery } from "~/redux/services/employee/employee";
import jwtDecode from "jwt-decode";

export default function ClientLayout({ children }) {
  const accessToken = getCookie("accessToken");
  if (accessToken) {
    const jwt = jwtDecode(accessToken);
    if (jwt.role === "Customer") {
      useGetCustomerQuery(accessToken);
    } else if (jwt.role === "Employee") {
      useGetEmployeeQuery(accessToken);
    }
  }
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
