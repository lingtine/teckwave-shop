"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";

import { useRouter } from "next/navigation";
import {
  changeField,
  clearData,
} from "~/redux/features/catalog/category/form-add-category-slice";
import { useDispatch, useSelector } from "react-redux";
import SelectBox from "~/app/components/select-box/select-box";
import { useEffect } from "react";
import { useFetchCategoryGroupsQuery } from "~/redux/services/catalog/category-group-api";
import { useCreateCategoryMutation } from "~/redux/services/catalog/category-api";

function AddCategory() {
  const {
    data: categoryGroupData,
    isLoading,
    isSuccess: categoryGroupSuccess,
  } = useFetchCategoryGroupsQuery();

  const [addCategory, result] = useCreateCategoryMutation();

  const router = useRouter();
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.formAddCategorySlice);

  let dataCategoryGroupConfig = [];

  if (categoryGroupSuccess) {
    dataCategoryGroupConfig = categoryGroupData.data.map((item) => {
      return {
        ...item,
        label: item.name,
      };
    });
  }

  useEffect(() => {
    if (result.isSuccess) {
      router.push("/dashboard/category");
      dispatch(clearData());
    }
  }, [result.isSuccess, dispatch, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, categoryGroup } = dataForm;
    addCategory({ name, description, categoryGroupId: categoryGroup.id });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ field: name, value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="my-2 text-lg text-primary-1 font-bold">Add Category</h2>
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
              <div className="flex items-center">
                <div className="mr-4">
                  <h4>Category group:</h4>
                </div>
                {categoryGroupSuccess && (
                  <SelectBox
                    options={dataCategoryGroupConfig}
                    onChange={(option) => {
                      dispatch(
                        changeField({ field: "categoryGroup", value: option })
                      );
                    }}
                    selected={dataForm.categoryGroup}
                  />
                )}
              </div>
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
                Create category
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}

export default AddCategory;
