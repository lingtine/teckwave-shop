"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";

import { useRouter } from "next/navigation";
import {
  changeDescription,
  changeDiscountEvent,
  changeName,
  changeQuantity,
  changeReducedPrice,
  clearData,
} from "~/redux/features/warehouses/discount/form-create-coupon-slice";
import { useDispatch, useSelector } from "react-redux";
import SelectBox from "~/app/components/select-box/select-box";
import { useEffect } from "react";
import { useCreateCouponMutation } from "~/redux/services/discount/coupon-api";
import { useGetAllDiscountEventQuery } from "~/redux/services/discount/discount-event-api";

function AddProducts() {
  const { data, isLoading, isSuccess } = useGetAllDiscountEventQuery();

  const [createCoupon, result] = useCreateCouponMutation();

  const router = useRouter();
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.formCreateCouponSlice);

  let dataConfig = [];

  if (isSuccess) {
    dataConfig = data.data.map((item) => {
      return {
        ...item,
        label: item.name,
      };
    });
  }

  useEffect(() => {
    if (result.isSuccess) {
      router.push("/dashboard/coupons");
      dispatch(clearData());
    }
  }, [result.isSuccess, dispatch, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, reducedPrice, quantity, discountEvent } =
      dataForm;
    createCoupon({
      name,
      description,
      reducedPrice,
      quantity,
      discountEventId: discountEvent.id,
    });
  };

  return (
    <div>
      <h2 className="my-2 text-lg text-primary-1 font-bold">Add Coupon</h2>
      <form onSubmit={handleSubmit}>
        <ul className="flex flex-col gap-4 max-w-lg">
          <li className="text-sm font-semibold">Coupon Information</li>
          <li>
            <Input
              label={"Coupon Name"}
              value={dataForm.name}
              onChange={(e) => {
                dispatch(changeName(e.target.value));
              }}
            ></Input>
          </li>
          <li>
            <div className="flex items-center">
              <div className="mr-4">
                <h4>Discount event:</h4>
              </div>
              {isSuccess && (
                <SelectBox
                  options={dataConfig}
                  onChange={(option) => {
                    dispatch(changeDiscountEvent(option));
                  }}
                  selected={dataForm.discountEvent}
                />
              )}
            </div>
          </li>
          <li>
            <Input
              type="number"
              label={"Reduced Price"}
              value={dataForm.reducedPrice}
              onChange={(e) => {
                dispatch(changeReducedPrice(e.target.value));
              }}
            ></Input>
          </li>
          <li>
            <Input
              label={"Quantity"}
              value={dataForm.quantity}
              type="number"
              onChange={(e) => {
                dispatch(changeQuantity(e.target.value));
              }}
            ></Input>
          </li>
          <li>
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
              Create Coupon
            </Button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default AddProducts;
