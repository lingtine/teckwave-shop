"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";

import { useParams, useRouter } from "next/navigation";
import {
  changeAllValue,
  changeDescription,
  changeName,
} from "~/redux/features/product/category-group/form-edit-category-group-slice";
import { useDispatch, useSelector } from "react-redux";
import { useGetCategoryGroupQuery } from "~/redux/services/catalog/category-group-api";
import { useUpdateCategoryGroupMutation } from "~/redux/services/catalog/category-group-api";
import { useEffect } from "react";
function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const dataForm = useSelector((state) => state.formEditCategoryGroup);
  const [updateCategory, result] = useUpdateCategoryGroupMutation();
  const { data, isSuccess } = useGetCategoryGroupQuery(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory([id, dataForm]);
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(changeAllValue(data.data));
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="my-2 text-lg text-primary-1 font-bold">
        Update Category Group
      </h2>
      <div className="flex -mx-2">
        <div className="flex-[0_0_50%] px-2"></div>
        <div className="flex-[0_0_50%] px-2">
          <ul>
            <li className="text-sm font-semibold">
              Category Group Information
            </li>
            <li className="my-4">
              <Input
                label={"Category Group Name"}
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
          Update
        </Button>
      </div>
    </form>
  );
}

export default EditProduct;
