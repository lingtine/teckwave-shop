"use client";

import { useCreateDiscountEventMutation } from "~/redux/services/discount/discount-event-api";
import { useSelector, useDispatch } from "react-redux";

import {
  changeField,
  clearData,
} from "~/redux/features/warehouse/discount/form-add-discount-event-slice";
import Input from "~/app/components/input/input";
import Button from "~/app/components/button/button";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
function AddDiscount() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [createDiscount, result] = useCreateDiscountEventMutation();
  const dataForm = useSelector((state) => state.formAddDiscountEventSlice);

  useEffect(() => {
    if (result.isSuccess) {
      toast.success("Create Discount succeeded");
      router.push("/dashboard/discount");
      dispatch(clearData());
    }
    if (result.isError) {
      toast.error("Error");
    }
  }, [result.isSuccess, result.isError, dispatch, router]);
  const handleSubmit = (e) => {
    e.preventDefault();
    createDiscount(dataForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ field: name, value }));
  };

  return (
    <div>
      <h4 className="my-8 uppercase text-2xl font-semibold">
        Add Discount Event
      </h4>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <div>
          <Input
            label={"Name"}
            value={dataForm.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            label={"Description"}
            value={dataForm.description}
            name="description"
            onChange={handleChange}
          />
        </div>
        <div>
          <Button type={"submit"} secondary>
            Create Discount
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddDiscount;
