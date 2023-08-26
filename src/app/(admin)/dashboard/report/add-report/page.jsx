"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";
import InputImage from "~/app/components/input/InputImage";

import { useRouter } from "next/navigation";
import {
  changeDescription,
  changeFrom,
  changeReportType,
  changeTo,
  cleanData,
} from "~/redux/features/warehouses/report/form-add-report-slice";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useAddReportMutation } from "~/redux/services/warehouse/report-api";
import { useFetchAllSuppliersQuery } from "~/redux/services/warehouse/supplier-api";
import SelectBox from "~/app/components/select-box/select-box";
import SelectedProduct from "~/app/components/admin/selected-product";
import { useFetchAllWarehousersQuery } from "~/redux/services/warehouse/warehouse-api";
function AddProducts() {
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
      dispatch(cleanData());
    }
  }, [result.isSuccess]);

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
    <div>
      <h2 className="my-2 text-lg text-primary-1 font-bold">Add Report</h2>
      <form onSubmit={handleSubmit} className="flex -mx-2">
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
                      dispatch(changeFrom(option));
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
                      dispatch(changeTo(option));
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
                    dispatch(changeReportType(option));
                  }}
                  selected={dataForm.reportType}
                />
              </div>
            </li>
            <li className="my-4">
              <InputTextArea
                label={"Description"}
                value={dataForm.description}
                onChange={(e) => {
                  dispatch(changeDescription(e.target.value));
                }}
              ></InputTextArea>
            </li>
          </ul>
          <Button secondary small type={"submit"}>
            Create Report
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;
