"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";

import { useDispatch, useSelector } from "react-redux";
import {
  changeAddress,
  changeField,
  clearForm,
} from "~/redux/features/auth/profile/form-add-address-slice";

import { useAddDeliveryInfosMutation } from "~/redux/services/customer/customer-api";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
function AddAddress() {
  const dispatch = useDispatch();
  const router = useRouter();
  const dataForm = useSelector((state) => state.formAddAddressSlice);

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

  const handleChangeInfo = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ field: name, value }));
  };
  const handleChangeAddress = (e) => {
    const { name, value } = e.target;
    dispatch(changeAddress({ field: name, value }));
  };

  return (
    <div className="px-10">
      <h1 className="text-xl font-bold text-primary-1">Add Address</h1>
      <form className="my-8" onSubmit={handleSubmit}>
        <ul className="flex flex-col gap-4">
          <li>
            <Input
              label={"Name"}
              name="name"
              onChange={handleChangeInfo}
              value={dataForm.name}
            />
          </li>
          <li>
            <Input
              label={"Phone Number"}
              name="phoneNumber"
              onChange={handleChangeInfo}
              value={dataForm.phoneNumber}
            />
          </li>

          <li>
            <Input
              label={"City"}
              name="city"
              onChange={handleChangeAddress}
              value={dataForm.address.city}
            />
          </li>
          <li>
            <Input
              label={"District"}
              name="district"
              onChange={handleChangeAddress}
              value={dataForm.address.district}
            />
          </li>
          <li>
            <Input
              label={"Ward"}
              name="ward"
              onChange={handleChangeAddress}
              value={dataForm.address.ward}
            />
          </li>
          <li>
            <Input
              label={"Street"}
              name="street"
              onChange={handleChangeAddress}
              value={dataForm.address.street}
            />
          </li>
          <li>
            <Input
              label={"Street Number"}
              name="number"
              onChange={handleChangeAddress}
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
