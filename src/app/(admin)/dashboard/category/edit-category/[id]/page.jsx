"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";

import { useParams, useRouter } from "next/navigation";
import {
  changeField,
  clearData,
} from "~/redux/features/catalog/category/form-update-category-slice";
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
  const dataForm = useSelector((state) => state.formUpdateCategorySlice);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ field: name, value }));
  };

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
                name="name"
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
