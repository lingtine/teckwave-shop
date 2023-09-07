"use client";
import { useGetSupplierQuery } from "~/redux/services/warehouse/supplier-api";
import { useGetWarehouserQuery } from "~/redux/services/warehouse/warehouse-api";
import SelectBox from "../select-box/select-box";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import SelectedReportStatus from "../admin/selected-report-status";

function ReportDetailInformation({ data }) {
  const router = useRouter();
  const {
    data: supplierData,
    isLoading,
    isSuccess: supplierDataSuccess,
  } = useGetSupplierQuery(data.supplierId);

  const { data: warehouseData, isSuccess: warehouseDataSuccess } =
    useGetWarehouserQuery(data.to);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl my-4 font-semibold text-secondary-3">
          Information
        </h3>
        <div className="flex items-end justify-between">
          <span className="text-lg font-semibold">Description: </span>
          <p>{data.description}</p>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-lg font-semibold">Supplier: </span>
          <p>{supplierDataSuccess && supplierData.data.name}</p>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-lg font-semibold">To: </span>
          <p>{warehouseDataSuccess && warehouseData.data.name}</p>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-lg font-semibold">Report Type: </span>
          <p>{data.reportType}</p>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-lg font-semibold">Status: </span>

          <SelectedReportStatus reportId={data.id} data={data.reportStatus} />
        </div>
      </div>
    </div>
  );
}

export default ReportDetailInformation;
