"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";
import InputImage from "~/app/components/input/InputImage";

import { useParams, useRouter } from "next/navigation";
import {
  changeAllValue,
  changeDescription,
  changeImage,
  changeName,
} from "~/redux/features/dashboard/brand/form-update-brand-slice";
import { useGetBrandQuery } from "~/redux/services/catalog/brand-api";
import { useUpdateBrandMutation } from "~/redux/services/catalog/brand-api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const dataForm = useSelector((state) => state.formUpdateBrandSlice);
  const { data, isLoading, isSuccess } = useGetBrandQuery(id);
  const [updateBrand, result] = useUpdateBrandMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("Name", dataForm.name);
    formData.append("Description", dataForm.description);
    if (dataForm.image) formData.append("Image", dataForm.image[0]);

    updateBrand([dataForm.id, formData]);
  };

  useEffect(() => {
    if (result.isSuccess) {
      router.push("/dashboard/brands");
      toast.success("succeeded");
    }
    if (result.isError) {
      toast.error("Error");
    }
    if (isSuccess) {
      dispatch(
        changeAllValue({
          id: data.data.id,
          name: data.data.name,
          description: data.data.description,
        })
      );
    }
  }, [isSuccess, result.isSuccess]);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="my-2 text-lg text-primary-1 font-bold">Update Brand</h2>
      <div className="flex -mx-2">
        <div className="flex-[0_0_50%] px-2">
          <InputImage
            onChange={(image) => {
              dispatch(changeImage(image));
            }}
          />
        </div>
        <div className="flex-[0_0_50%] px-2">
          <ul>
            <li className="text-sm font-semibold">Brand Information</li>
            <li className="my-4">
              <Input
                label={"Product Name"}
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
          </ul>
        </div>
      </div>
      <div className="flex justify-end">
        <Button secondary small type={"submit"}>
          Update Brand
        </Button>
      </div>
    </form>
  );
}

export default EditProduct;
