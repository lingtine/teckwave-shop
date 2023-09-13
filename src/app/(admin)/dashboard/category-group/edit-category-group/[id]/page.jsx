"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";

import { useParams, useRouter } from "next/navigation";
import {
  changeAllValue,
  changeField,
  clearData,
} from "~/redux/features/catalog/category-group/form-update-category-group-slice";
import { useDispatch, useSelector } from "react-redux";
import { useGetCategoryGroupQuery } from "~/redux/services/catalog/category-group-api";
import { useUpdateCategoryGroupMutation } from "~/redux/services/catalog/category-group-api";
import { useEffect } from "react";
function EditCategoryGroup() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const dataForm = useSelector((state) => state.formEditCategoryGroupSlice);
  const [updateCategory, result] = useUpdateCategoryGroupMutation();
  const { data, isSuccess } = useGetCategoryGroupQuery(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory([id, dataForm]);
  };

  useEffect(() => {
    if (result.isSuccess) {
      router.push("/dashboard/category-group");
    }
  }, [result.isSuccess, router]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(changeAllValue(data.data));
    }
  }, [isSuccess, dispatch, data?.data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ field: name, value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="my-2 text-lg text-primary-1 font-bold">
        Update Category Group
      </h2>
      <div className="flex -mx-2">
        <div className="flex-[0_0_50%] px-2">
          <ul>
            <li className="text-sm font-semibold">
              Category Group Information
            </li>
            <li className="my-4">
              <Input
                label={"Category Group Name"}
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
                Update
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}

export default EditCategoryGroup;
