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

function SelectedReportStatus({ data, reportId }) {
  const auth = useSelector((state) => state.authSlice);
  const [approve, { isSuccess: approvedSuccess }] = useApproveReportMutation();
  const [cancelled, { isSuccess: cancelledSuccess }] =
    useCancelReportMutation();
  const [inspect, { isSuccess: inspectSuccess }] = useInspectReportMutation();

  let options;
  const [option, setOption] = useState({
    label: data,
  });

  useEffect(() => {
    const { role } = jwtDecode(auth.accessToken);
    if (option.label === "Approved" && data === "Creative") {
      if (role === "Employee") {
        toast.error("You do not have Approved permission");
        setOption({ label: "Creative" });
      }
      if (role === "Admin") {
        approve(reportId);
      }
    }
    if (option.label === "Inspected" && data === "Approved") {
      inspect(reportId);
    }
    if (option.label === "Cancelled") {
      cancelled(reportId);
    }

    if (approvedSuccess) toast.success("Approved success");
    if (inspectSuccess) toast.success("Inspected success");
    if (cancelledSuccess) toast.success("Cancelled success");
  }, [option, approvedSuccess, inspectSuccess, cancelledSuccess]);

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
  return (
    <div>
      {options && (
        <SelectBox options={options} onChange={setOption} selected={option} />
      )}
    </div>
  );
}

export default SelectedReportStatus;
