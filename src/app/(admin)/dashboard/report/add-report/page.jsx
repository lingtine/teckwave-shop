"use client";

import Button from "~/app/components/button/button";
import InputTextArea from "~/app/components/input/input-textarea";

import { useRouter } from "next/navigation";
import {
  changeField,
  clearData,
} from "~/redux/features/warehouse/report/form-add-report-slice";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useAddReportMutation } from "~/redux/services/warehouse/report-api";
import { useFetchAllSuppliersQuery } from "~/redux/services/warehouse/supplier-api";
import SelectBox from "~/app/components/select-box/select-box";
import SelectedProduct from "~/app/components/admin/selected-product";
import { useFetchAllWarehousersQuery } from "~/redux/services/warehouse/warehouse-api";
function AddReport() {
  const { data: dataSupplier, isSuccess: dataSupplierSuccess } =
    useFetchAllSuppliersQuery();
  const { data: dataWarehouse, isSuccess: dataWareHouseSuccess } =
    useFetchAllWarehousersQuery();
  const [addReport, result] = useAddReportMutation();

  const router = useRouter();
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.formAddReportSlice);

  let dataSupplierConfig = [];
  let dataWarehouseConfig = [];

  const optionsReport = [
    {
      id: Math.random().toString(),
      label: "GoodsReceiptReport",
    },
    {
      id: Math.random().toString(),
      label: "GoodsIssueReport",
    },
  ];
  if (dataSupplierSuccess) {
    dataSupplierConfig = dataSupplier.data.map((item) => {
      return {
        ...item,
        label: item.name,
      };
    });
  }
  if (dataWareHouseSuccess) {
    dataWarehouseConfig = dataWarehouse.data.map((item) => {
      return {
        ...item,
        label: item.name,
      };
    });
  }

  useEffect(() => {
    if (result.isSuccess) {
      router.push("/dashboard/report");
      dispatch(clearData());
    }
  }, [result.isSuccess, dispatch, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { from, to, description, reportType, supplier, products } = dataForm;
    const data =
      reportType.label === "GoodsReceiptReport"
        ? {
            to: to.id,
            description,
            reportType: reportType.label,
            supplierId: from.id,
            reportProducts: products.map((product) => ({
              productId: product.id,
              quantity: Number(product.quantity),
            })),
          }
        : {
            from: from.id,
            to: to.id,
            description,
            reportType: reportType.label,
            reportProducts: products.map((product) => ({
              productId: product.id,
              quantity: Number(product.quantity),
            })),
          };
    addReport(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="my-2 text-lg text-primary-1 font-bold">Add Report</h2>

      <div className="flex">
        <div className="flex-[0_0_50%] px-2">
          <SelectedProduct />
        </div>
        <div className="flex-[0_0_50%] px-2">
          <ul>
            <li className="text-sm font-semibold">Report Information</li>

            <li className="my-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <h4>From:</h4>
                </div>
                {dataSupplierSuccess && (
                  <SelectBox
                    options={dataSupplierConfig}
                    onChange={(option) => {
                      dispatch(changeField({ field: "from", value: option }));
                    }}
                    selected={dataForm.from}
                  />
                )}
              </div>
            </li>
            <li className="my-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <h4>To:</h4>
                </div>
                {dataWareHouseSuccess && (
                  <SelectBox
                    options={dataWarehouseConfig}
                    onChange={(option) => {
                      dispatch(changeField({ field: "to", value: option }));
                    }}
                    selected={dataForm.to}
                  />
                )}
              </div>
            </li>
            <li className="my-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <h4>Report Type:</h4>
                </div>
                <SelectBox
                  options={optionsReport}
                  onChange={(option) => {
                    dispatch(
                      changeField({ field: "reportType", value: option })
                    );
                  }}
                  selected={dataForm.reportType}
                />
              </div>
            </li>
            <li className="my-4">
              <InputTextArea
                label={"Description"}
                value={dataForm.description}
                name="description"
                onChange={(e) => {
                  const { name, value } = e.target;
                  dispatch(changeField({ field: name, value }));
                }}
              ></InputTextArea>
            </li>
            <li className="flex justify-end">
              <Button small type={"submit"}>
                Create Report
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}

export default AddReport;
