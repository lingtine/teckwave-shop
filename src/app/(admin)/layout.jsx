"use client";

import "~/styles/globals.css";
import { getCookie } from "cookies-next";
import { useGetCustomerByMuMutation } from "~/redux/services/customer/customer-api";

import { useGetEmployeeByMuMutation } from "~/redux/services/employee/employee";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

export default function ClientLayout({ children }) {
  const accessToken = getCookie("accessToken");
  const [getUser] = useGetCustomerByMuMutation();
  const [getEmployee] = useGetEmployeeByMuMutation();

  useEffect(() => {
    if (accessToken) {
      const jwt = jwtDecode(accessToken);
      let found;
      if (Array.isArray(jwt.role)) {
        found = jwt.role.find((el) => el === "Employee");
      }
      if (jwt.role === "Customer") {
        getUser();
      } else if (found) {
        getEmployee();
      }
    }
  }, [accessToken, getEmployee, getUser]);

  return children;
}
