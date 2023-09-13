"use client";

import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";
import { useSelector } from "react-redux";
import {
  changeAddress,
  changeField,
  clearData,
} from "~/redux/features/order/form-check-out-slice";
import { useDispatch } from "react-redux";

function DeliveryInformation() {
  const dataForm = useSelector((state) => state.formCheckoutSlice);
  const dispatch = useDispatch();

  const handleChangeInfo = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ field: name, value }));
  };

  const handleChangeAddress = (e) => {
    const { name, value } = e.target;
    dispatch(changeAddress({ field: name, value }));
  };

  return (
    <>
      <div>
        <h3 className="my-8 text-xl font-bold ">Delivery Information</h3>
        <div className="">
          <div className="my-4">
            <Input
              label={"Email"}
              value={dataForm.email}
              name="email"
              onChange={handleChangeInfo}
            />
          </div>
          <div className="my-4">
            <Input
              label={"FullName"}
              value={dataForm.fullName}
              name="fullName"
              onChange={handleChangeInfo}
            />
          </div>
          <div className="my-4">
            <Input
              label={"PhoneNumber"}
              value={dataForm.phoneNumber}
              name="phoneNumber"
              onChange={handleChangeInfo}
            />
          </div>
          <div className="my-4">
            <InputTextArea
              label={"Note"}
              value={dataForm.note}
              name="note"
              onChange={handleChangeInfo}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="my-8 text-xl font-bold ">Delivery Address</h3>
        <div className="">
          <div className="my-4">
            <Input
              label={"City"}
              value={dataForm.city}
              name="city"
              onChange={handleChangeAddress}
            />
          </div>
          <div className="my-4">
            <Input
              label={"District"}
              value={dataForm.district}
              name="district"
              onChange={handleChangeAddress}
            />
          </div>
          <div className="my-4">
            <Input
              label={"Ward"}
              value={dataForm.ward}
              name="ward"
              onChange={handleChangeAddress}
            />
          </div>
          <div className="my-4">
            <Input
              label={"Street"}
              value={dataForm.stress}
              name="stress"
              onChange={handleChangeAddress}
            />
          </div>
          <div className="my-4">
            <Input
              label={"StreetNumber"}
              value={dataForm.stressNumber}
              name="stressNumber"
              onChange={handleChangeAddress}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryInformation;
