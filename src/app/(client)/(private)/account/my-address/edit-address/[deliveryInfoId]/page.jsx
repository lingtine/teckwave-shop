"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";

import {
  useGetDeliveryInfoQuery,
  useUpdateDeliveryInfoMutation,
} from "~/redux/services/customer/customer-api";

import { useParams } from "next/navigation";
import {
  changeName,
  changeCity,
  changeDistrict,
  changeNumber,
  changePhoneNumber,
  changeStreet,
  changeWard,
  clearForm,
  changeAllData,
} from "~/redux/features/dashboard/form-edit-address-slice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";

function UpdateAddress() {
  const { deliveryInfoId } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const { data, isLoading, isSuccess } = useGetDeliveryInfoQuery(
    deliveryInfoId,
    { refetchOnMountOrArgChange: true }
  );
  const [updateDeliveryInfo, result] = useUpdateDeliveryInfoMutation();
  const dataForm = useSelector((state) => state.editAddressForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDeliveryInfo([deliveryInfoId, dataForm]);
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(changeAllData(data.data));
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (result.isSuccess) {
      toast.success("Update succeeded");
      router.push("/account/my-address");
      dispatch(clearForm());
    }
    if (result.isError) {
      toast.error("Update Failed");
    }
  }, [result.isSuccess, result.isError]);
  return (
    <div className="px-10">
      <h1 className="text-xl font-bold text-primary-1">Edit Address</h1>

      <div className="my-4">
        <form onSubmit={handleSubmit}>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4">
              <Input
                label={"Name"}
                value={dataForm.name}
                onChange={(e) => {
                  dispatch(changeName(e.target.value));
                }}
              />
              <Input
                label={"Phone Number"}
                value={dataForm.phoneNumber}
                onChange={(e) => {
                  dispatch(changePhoneNumber(e.target.value));
                }}
              />
            </li>
            <li className="flex gap-4">
              <Input
                label={"City"}
                value={dataForm.address.city}
                onChange={(e) => {
                  dispatch(changeCity(e.target.value));
                }}
              />
              <Input
                label={"District"}
                value={dataForm.address.district}
                onChange={(e) => {
                  dispatch(changeDistrict(e.target.value));
                }}
              />
            </li>
            <li className="flex gap-4">
              <Input
                label={"Ward"}
                value={dataForm.address.ward}
                onChange={(e) => {
                  dispatch(changeWard(e.target.value));
                }}
              />
              <Input
                label={"Street"}
                value={dataForm.address.street}
                onChange={(e) => {
                  dispatch(changeStreet(e.target.value));
                }}
              />
              <Input
                label={"Street number"}
                value={dataForm.address.number}
                onChange={(e) => {
                  dispatch(changeNumber(e.target.value));
                }}
              />
            </li>
            <li className="flex justify-end">
              <Button type={"submit"} secondary>
                Update Delivery info
              </Button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default UpdateAddress;
