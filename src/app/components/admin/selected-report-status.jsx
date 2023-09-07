"use client";
import { useEffect, useState } from "react";
import SelectBox from "../select-box/select-box";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import {
  useApproveReportMutation,
  useCancelReportMutation,
  useInspectReportMutation,
} from "~/redux/services/warehouse/report-api";
import { useRouter } from "next/navigation";
function SelectedReportStatus({ data, reportId }) {
  const router = useRouter();
  const auth = useSelector((state) => state.authSlice);
  const [approve, { isSuccess: approvedSuccess, isError: approvedError }] =
    useApproveReportMutation();
  const [cancelled, { isSuccess: cancelledSuccess, isError: cancelledError }] =
    useCancelReportMutation();
  const [inspect, { isSuccess: inspectSuccess, isError: inspectError }] =
    useInspectReportMutation();

  let options;
  const [option, setOption] = useState({
    label: data,
  });
  useEffect(() => {
    if (approvedSuccess || cancelledSuccess || inspectSuccess) {
      router.push("/dashboard/report");
      toast.success("Change Status succeeded");
    }
    if (approvedError || cancelledError || inspectError) {
      toast.error("Change Status Failed");
      setOption({
        label: data,
      });
    }
  }, [
    approvedSuccess,
    cancelledSuccess,
    inspectSuccess,
    approvedError,
    cancelledError,
    inspectError,
  ]);

  useEffect(() => {
    const { role } = jwtDecode(auth.accessToken);
    if (option.label !== data) {
      if (option.label === "Approved" && data === "Creative") {
        let adminRole = role.find((role) => role === "Admin");

        if (!adminRole) {
          toast.error("You do not have Approved permission");
          setOption({ label: "Creative" });
        } else {
          approve(reportId);
        }
      }
      if (option.label === "Inspected" && data === "Approved") {
        inspect(reportId);
      }
      if (option.label === "Cancelled" && data !== "Cancelled") {
        cancelled(reportId);
      }
    }
  }, [option]);

  if (data === "Creative") {
    options = [
      {
        id: Math.random().toString(),
        label: "Creative",
      },
      {
        id: Math.random().toString(),
        label: "Approved",
      },
      {
        id: Math.random().toString(),
        label: "Cancelled",
      },
    ];
  }
  if (data === "Approved") {
    options = [
      {
        id: Math.random().toString(),
        label: "Approved",
      },
      {
        id: Math.random().toString(),
        label: "Inspected",
      },
      {
        id: Math.random().toString(),
        label: "Cancelled",
      },
    ];
  }
  if (data === "Cancelled") {
    options = [
      {
        id: Math.random().toString(),
        label: "Cancelled",
      },
    ];
  }
  if (data === "Inspected") {
    options = [
      {
        id: Math.random().toString(),
        label: "Inspected",
      },
    ];
  }
  return (
    <div>
      {options && (
        <SelectBox options={options} onChange={setOption} selected={option} />
      )}
    </div>
  );
}

export default SelectedReportStatus;
