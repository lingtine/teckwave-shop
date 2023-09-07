"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";

import { useRouter } from "next/navigation";
import {
  changeField,
  clearForm,
} from "~/redux/features/warehouses/warehouse/form-add-warehouse-slice";
import { useAddWarehouserMutation } from "~/redux/services/warehouse/warehouse-api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";

function AddProducts() {
  const router = useRouter();
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.formAddWarehouseSlice);
  const [addWarehouse, result] = useAddWarehouserMutation();
  useEffect(() => {
    if (result.isSuccess) {
      router.push("/dashboard/warehouse");
      toast.success("Create succeeded");
      dispatch(clearForm());
    } else if (result.isError) {
      toast.error("Create Failed");
    }
  }, [result.isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addWarehouse({ ...dataForm, warehouseType: "Retail" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="my-2 text-lg text-primary-1 font-bold">Add warehouse</h2>
      <div className="flex">
        <div className="flex-[0_0_50%] px-2">
          <ul>
            <li className="text-sm font-semibold">Warehouse Information</li>
            <li className="my-4">
              <Input
                label={"Name"}
                value={dataForm.name}
                onChange={(e) => {
                  dispatch(
                    changeField({ field: "name", value: e.target.value })
                  );
                }}
              ></Input>
            </li>
            <li className="my-4">
              <Input
                label={"Email"}
                value={dataForm.email}
                onChange={(e) => {
                  dispatch(
                    changeField({ field: "email", value: e.target.value })
                  );
                }}
              ></Input>
            </li>
            <li className="my-4">
              <Input
                label={"Fax"}
                value={dataForm.fax}
                onChange={(e) => {
                  dispatch(
                    changeField({ field: "fax", value: e.target.value })
                  );
                }}
              ></Input>
            </li>
            <li className="my-4">
              <Input
                label={"HotLine"}
                value={dataForm.hotline}
                onChange={(e) => {
                  dispatch(
                    changeField({ field: "hotline", value: e.target.value })
                  );
                }}
              ></Input>
            </li>

            <li className="my-4">
              <InputTextArea
                label={"Description"}
                value={dataForm.description}
                onChange={(e) => {
                  dispatch(
                    changeField({ field: "description", value: e.target.value })
                  );
                }}
              ></InputTextArea>
            </li>
            <li className="flex justify-end">
              <Button small type={"submit"}>
                Create warehouse
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}

export default AddProducts;
