"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";
import InputImage from "~/app/components/input/InputImage";

import { useRouter } from "next/navigation";
import {
  changeDescription,
  changeImage,
  changeName,
  clearData,
} from "~/redux/features/dashboard/brand/form-add-brand-slice";
import { useAddBrandMutation } from "~/redux/services/catalog/brand-api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";

function addBrand() {
  const [addBrand, result] = useAddBrandMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.formAddBrandSlice);

  useEffect(() => {
    if (result.isSuccess) {
      router.push("/dashboard/brands");
      toast.success("Create brand succeeded");
      dispatch(clearData());
    }
  }, [result.isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("Name", dataForm.name);
    formData.append("Description", dataForm.description);
    formData.append("Image", dataForm.image[0]);
    addBrand(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="my-2 text-lg text-primary-1 font-bold">Add Brand</h2>
      <div className="flex -mx-2">
        <div className="flex-[0_0_50%] px-2">
          <InputImage
            onChange={(image) => {
              dispatch(changeImage(image));
            }}
          ></InputImage>
        </div>
        <div className="flex-[0_0_50%] px-2">
          <ul>
            <li className="text-sm font-semibold">Brand Information</li>
            <li className="my-4">
              <Input
                label={"Brand Name"}
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
                Create brand
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}

export default addBrand;
