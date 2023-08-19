"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { useAddCategoryGroupsMutation } from "~/redux/services/catalog/category-group-api";

import { toast } from "react-toastify";

function CategoryGroup() {
  const [dataForm, setDataForm] = useState({
    name: "",
    description: "",
  });

  const [createCategoryGroups, { isSuccess, isLoading, isError }] =
    useAddCategoryGroupsMutation();
  const id = toast;
  useEffect(() => {
    if (isLoading) {
      toast.loading("loading");
    } else if (isError) {
      toast.update(id, {
        render: "Error",
        type: "error",
        isLoading: false,
      });
    } else if (isSuccess) {
      toast.update(id, {
        render: "Success",
        type: "success",
        isLoading: false,
      });
    }
  }, [isError, isLoading, isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();

    createCategoryGroups(dataForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="my-2 text-lg text-primary-1 font-bold">
        Create Category Group
      </h2>
      <div className="flex -mx-2">
        <div className="flex-[0_0_50%] px-2">
          <ul>
            <li className="my-4">
              <Input
                label={"Product Name"}
                value={dataForm.name}
                onChange={(e) => {
                  setDataForm((dataForm) => ({
                    ...dataForm,
                    name: e.target.value,
                  }));
                }}
              ></Input>
            </li>

            <li className="my-4">
              <InputTextArea
                label={"Description"}
                value={dataForm.description}
                onChange={(e) => {
                  setDataForm((dataForm) => ({
                    ...dataForm,
                    description: e.target.value,
                  }));
                }}
              ></InputTextArea>
            </li>
          </ul>
          <div className="flex justify-end">
            <Button secondary small type={"submit"}>
              Create
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CategoryGroup;
