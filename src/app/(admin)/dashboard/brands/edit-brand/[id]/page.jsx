"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";
import InputImage from "~/app/components/input/InputImage";

import { useParams, useRouter } from "next/navigation";
import {
  changeAllValue,
  changeField,
  clearData,
} from "~/redux/features/catalog/brand/form-update-brand-slice";
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
      const { id, name, description } = data.data;
      dispatch(
        changeAllValue({
          id,
          name,
          description,
        })
      );
    }
  }, [
    isSuccess,
    result.isSuccess,
    data?.data,
    dispatch,
    result.isError,
    router,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ field: name, value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="my-2 text-lg text-primary-1 font-bold">Update Brand</h2>
      <div className="flex -mx-2">
        <div className="flex-[0_0_50%] px-2">
          <InputImage
            onChange={(image) => {
              dispatch(changeField({ field: "image", value: image }));
            }}
          />
        </div>
        <div className="flex-[0_0_50%] px-2">
          <ul>
            <li className="text-sm font-semibold">Brand Information</li>
            <li className="my-4">
              <Input
                label={"Product Name"}
                name="name"
                value={dataForm.name}
                onChange={handleChange}
              ></Input>
            </li>

            <li className="my-4">
              <InputTextArea
                label={"Description"}
                value={dataForm.description}
                name="description"
                onChange={handleChange}
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
