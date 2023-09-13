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
  clearForm,
  changeAddress,
  changeField,
} from "~/redux/features/auth/profile/form-update-address-slice";
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
  const dataForm = useSelector((state) => state.formUpdateAddressSlice);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDeliveryInfo([deliveryInfoId, dataForm]);
  };

  useEffect(() => {
    if (result.isSuccess) {
      toast.success("Update succeeded");
      router.push("/account/my-address");
      dispatch(clearForm());
    }
    if (result.isError) {
      toast.error("Update Failed");
    }
  }, [result.isSuccess, result.isError, router, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ field: name, value }));
  };
  const handleChangeAddress = (e) => {
    const { name, value } = e.target;
    dispatch(changeAddress({ field: name, value }));
  };

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
                name="name"
                onChange={handleChange}
              />
              <Input
                label={"Phone Number"}
                name="phoneNumber"
                value={dataForm.phoneNumber}
                onChange={handleChange}
              />
            </li>
            <li className="flex gap-4">
              <Input
                label={"City"}
                name="city"
                value={dataForm.address.city}
                onChange={handleChangeAddress}
              />
              <Input
                label={"District"}
                name="district"
                value={dataForm.address.district}
                onChange={handleChangeAddress}
              />
            </li>
            <li className="flex gap-4">
              <Input
                label={"Ward"}
                name="ward"
                value={dataForm.address.ward}
                onChange={handleChangeAddress}
              />
              <Input
                label={"Street"}
                name="street"
                value={dataForm.address.street}
                onChange={handleChangeAddress}
              />
              <Input
                label={"Street number"}
                name="number"
                value={dataForm.address.number}
                onChange={handleChangeAddress}
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
