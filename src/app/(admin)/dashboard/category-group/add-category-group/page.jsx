"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";
import InputImage from "~/app/components/input/InputImage";

import { useRouter } from "next/navigation";
import {
  changeDescription,
  changeName,
} from "~/redux/features/product/category-group/form-add-category-group-slice";
import { useFetchCategoriesQuery } from "~/redux/services/catalog/category-api";
import { useDispatch, useSelector } from "react-redux";
import SelectBox from "~/app/components/select-box/select-box";
import { useEffect } from "react";
import { useAddCategoryGroupMutation } from "~/redux/services/catalog/category-group-api";

function AddProducts() {
  const {
    data: categoryData,
    isLoading,
    isSuccess: categorySuccess,
  } = useFetchCategoriesQuery();

  const [addCategoryGroup, result] = useAddCategoryGroupMutation();

  const router = useRouter();
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.formAddCategoryGroupSlice);

  useEffect(() => {
    if (result.isSuccess) {
      router.push("/dashboard/category-group");
    }
  }, [result.isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategoryGroup(dataForm);
  };

  return (
    <div>
      <h2 className="my-2 text-lg text-primary-1 font-bold">
        Add Category Group
      </h2>
      <div className="flex -mx-2 ">
        <div className="flex-[0_0_50%] px-2">
          <form onSubmit={handleSubmit} className="flex justify-end flex-col">
            <ul>
              <li className="text-sm font-semibold">
                Category Group Information
              </li>
              <li className="my-4">
                <Input
                  label={"Name Category Group "}
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
              <li>
                <Button secondary small type={"submit"}>
                  Create category group
                </Button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
