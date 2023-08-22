"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";
import InputImage from "~/app/components/input/InputImage";

import { useRouter } from "next/navigation";
import {
  changeAddress,
  changeDescription,
  changeEmail,
  changeName,
  changePhoneNumber,
} from "~/redux/features/warehouses/supplier/form-add-supplier-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useAddSupplierMutation } from "~/redux/services/warehouse/supplier-api";

function AddSupplier() {
  const [add, result] = useAddSupplierMutation();

  const router = useRouter();
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.formAddSupplierSlice);

  useEffect(() => {
    if (result.isSuccess) {
      router.push("/dashboard/supplier");
    }
  }, [result.isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();

    add(dataForm);
  };

  return (
    <div>
      <h2 className="my-2 text-lg text-primary-1 font-bold">Add Supplier</h2>
      <form onSubmit={handleSubmit} className="flex -mx-2">
        <div className="flex-[0_0_50%] px-2"></div>
        <div className="flex-[0_0_50%] px-2">
          <ul>
            <li className="text-sm font-semibold">Supplier Information</li>
            <li className="my-4">
              <Input
                label={"Supplier Name"}
                value={dataForm.name}
                onChange={(e) => {
                  dispatch(changeName(e.target.value));
                }}
              ></Input>
            </li>
            <li className="my-4">
              <Input
                label={"Email"}
                value={dataForm.email}
                onChange={(e) => {
                  dispatch(changeEmail(e.target.value));
                }}
              ></Input>
            </li>
            <li className="my-4">
              <Input
                label={"Address"}
                value={dataForm.address}
                onChange={(e) => {
                  dispatch(changeAddress(e.target.value));
                }}
              ></Input>
            </li>
            <li className="my-4">
              <Input
                label={"Phone Number"}
                value={dataForm.phoneNumber}
                onChange={(e) => {
                  dispatch(changePhoneNumber(e.target.value));
                }}
              ></Input>
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
            Create Supplier
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddSupplier;
