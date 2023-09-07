"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";

import { useRouter } from "next/navigation";
import {
  changeName,
  changeDescription,
  cleanData,
} from "~/redux/features/warehouses/specification/form-add-specification-slice";
import { useAddSpecificationMutation } from "~/redux/services/catalog/specification-api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";

function AddSpecification() {
  const [add, result] = useAddSpecificationMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.formAddSpecificationSlice);

  useEffect(() => {
    if (result.isSuccess) {
      router.push("/dashboard/specification");
      toast.success("Create specification succeeded");
    }
    if (result.error) {
      toast.success("Create specification error");
    }
  }, [result.isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(cleanData());
    add(dataForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="my-2 text-lg text-primary-1 font-bold">
        Add Specification
      </h2>

      <div className="flex -mx-2">
        <div className="flex-[0_0_50%] px-2">
          <ul>
            <li className="text-sm font-semibold">Specification Information</li>
            <li className="my-4">
              <Input
                label={"Specification Name"}
                value={dataForm.name}
                onChange={(e) => {
                  dispatch(changeName(e.target.value));
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
            <li className="flex justify-end">
              <Button small type={"submit"}>
                Create Specification
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}

export default AddSpecification;
