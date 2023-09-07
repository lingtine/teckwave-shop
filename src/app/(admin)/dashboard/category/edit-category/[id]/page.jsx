"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";

import { useParams, useRouter } from "next/navigation";
import {
  changeName,
  changeDescription,
} from "~/redux/features/product/category/form-edit-category-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
  }, [result.isSuccess, router]);
  useEffect(() => {
    if (isSuccess) {
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="my-2 text-lg text-primary-1 font-bold">Update Category</h2>
      <div className="flex -mx-2">
        <div className="flex-[0_0_50%] px-2">
          <ul>
            <li className="text-sm font-semibold">Category Information</li>
            <li className="my-4">
              <Input
                label={"Category Name"}
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
                Update Category
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}

export default EditCategory;
