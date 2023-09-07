"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";

import { useDispatch, useSelector } from "react-redux";
import {
  changeDistrict,
  changeCity,
  changeName,
  changePhoneNumber,
  changeStreet,
  changeWard,
  changeNumberStreet,
  clearForm,
} from "~/redux/features/dashboard/form-add-address-slice";

import { useAddDeliveryInfosMutation } from "~/redux/services/customer/customer-api";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
function AddAddress() {
  const dispatch = useDispatch();
  const router = useRouter();
  const dataForm = useSelector((state) => state.addAddressForm);

  const [addDeliveryInfos, result] = useAddDeliveryInfosMutation();

  useEffect(() => {
    if (result.isSuccess) {
      router.push("/account/my-address");
      dispatch(clearForm());
      toast.success("Add Address succeeded");
    } else if (result.isError) {
      toast.error("Add Address Failed");
    }
  }, [result.isSuccess, result.isError, dispatch, router]);
  const handleSubmit = (e) => {
    e.preventDefault();
    addDeliveryInfos(dataForm);
  };

  return (
    <div className="px-10">
      <h1 className="text-xl font-bold text-primary-1">Add Address</h1>
      <form className="my-8" onSubmit={handleSubmit}>
        <ul className="flex flex-col gap-4">
          <li>
            <Input
              label={"Name"}
              required
              onChange={(e) => {
                dispatch(changeName(e.target.value));
              }}
              value={dataForm.name}
            />
          </li>
          <li>
            <Input
              label={"Phone Number"}
              required
              onChange={(e) => {
                dispatch(changePhoneNumber(e.target.value));
              }}
              value={dataForm.phoneNumber}
            />
          </li>

          <li>
            <Input
              label={"City"}
              required
              onChange={(e) => {
                dispatch(changeCity(e.target.value));
              }}
              value={dataForm.address.city}
            />
          </li>
          <li>
            <Input
              label={"District"}
              required
              onChange={(e) => {
                dispatch(changeDistrict(e.target.value));
              }}
              value={dataForm.address.district}
            />
          </li>
          <li>
            <Input
              label={"Ward"}
              required
              onChange={(e) => {
                dispatch(changeWard(e.target.value));
              }}
              value={dataForm.address.ward}
            />
          </li>
          <li>
            <Input
              label={"Street"}
              required
              onChange={(e) => {
                dispatch(changeStreet(e.target.value));
              }}
              value={dataForm.address.street}
            />
          </li>
          <li>
            <Input
              label={"Street Number"}
              required
              onChange={(e) => {
                dispatch(changeNumberStreet(e.target.value));
              }}
              value={dataForm.address.number}
            />
          </li>

          <li className="flex justify-end items-center gap-4">
            <Link href={`/account/my-address`}>
              <Button outline>Back</Button>
            </Link>
            <Button secondary type={"submit"}>
              Add Address
            </Button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default AddAddress;
