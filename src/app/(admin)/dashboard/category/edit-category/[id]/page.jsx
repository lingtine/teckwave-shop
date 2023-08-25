"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";

import { useParams, useRouter } from "next/navigation";
import {
  changeName,
  changeCategoryGroupId,
  changeDescription,
} from "~/redux/features/product/category/form-edit-category-slice";
import { useGetProductQuery } from "~/redux/services/catalog/product-api";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateProductMutation } from "~/redux/services/catalog/product-api";
import { useEffect } from "react";
import InputImage from "~/app/components/input/InputImage";
import {
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "~/redux/services/catalog/category-api";
function EditCategory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const dataForm = useSelector((state) => state.formEditCategorySlice);
  const { data, isLoading, isSuccess } = useGetCategoryQuery(id);
  const [updateCategory, result] = useUpdateCategoryMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    updateCategory(dataForm);
  };

  useEffect(() => {
    if (result.isSuccess) {
      router.push("/dashboard/products");
    }
  }, [result.isSuccess]);
  useEffect(() => {
    if (isSuccess) {
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="my-2 text-lg text-primary-1 font-bold">Update Product</h2>
      <div className="flex -mx-2">
        <div className="flex-[0_0_50%] px-2">
          <ul>
            <li className="text-sm font-semibold">Product Information</li>
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
          Update Category
        </Button>
      </div>
    </form>
  );
}

export default EditCategory;
