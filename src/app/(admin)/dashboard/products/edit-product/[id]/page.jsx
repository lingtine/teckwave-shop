"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";

import { useParams, useRouter } from "next/navigation";
import {
  changeField,
  clearData,
} from "~/redux/features/catalog/product/form-update-product-slice";
import { useGetProductQuery } from "~/redux/services/catalog/product-api";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateProductMutation } from "~/redux/services/catalog/product-api";
import InputImage from "~/app/components/input/InputImage";
import { useEffect } from "react";
function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const dataForm = useSelector((state) => state.formUpdateProductFormSlice);
  const { data, isLoading, isSuccess } = useGetProductQuery(id);
  const [updateProduct, result] = useUpdateProductMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("Name", dataForm.name);
    formData.append("Description", dataForm.description);
    formData.append("UnitPrice", dataForm.price);
    if (dataForm.image) formData.append("Image", dataForm.image[0]);

    updateProduct([dataForm.id, formData]);
  };
  useEffect(() => {
    if (result.isSuccess) {
      router.push("/dashboard/products");
      dispatch(clearData());
    }
  }, [result]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ field: name, value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="my-2 text-lg text-primary-1 font-bold">Update Product</h2>
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
            <li className="text-sm font-semibold">Product Information</li>
            <li className="my-4">
              <Input
                label={"Product Name"}
                value={dataForm.name}
                name="name"
                onChange={handleChange}
              ></Input>
            </li>
            <li className="my-4">
              <Input
                label={"Price"}
                value={dataForm.price}
                name="price"
                onChange={handleChange}
                type="number"
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
          Update Product
        </Button>
      </div>
    </form>
  );
}

export default EditProduct;
