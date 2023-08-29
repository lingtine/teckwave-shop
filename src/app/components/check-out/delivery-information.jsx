"use client";

import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";
import { useSelector } from "react-redux";
import {
  changeCity,
  changeDistrict,
  changeEmail,
  changeName,
  changeNote,
  changePhoneNumber,
  changeStreet,
  changeStreetNumber,
  changeWard,
} from "~/redux/features/check-out/checkout-slice";
import { useDispatch } from "react-redux";

function DeliveryInformation() {
  const dataForm = useSelector((state) => state.checkoutForm);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h3 className="my-8 text-xl font-bold ">Delivery Information</h3>
        <div className="">
          <div className="my-4">
            <Input
              label={"Email"}
              value={dataForm.email}
              onChange={(e) => {
                dispatch(changeEmail(e.target.value));
              }}
            />
          </div>
          <div className="my-4">
            <Input
              label={"FullName"}
              value={dataForm.fullName}
              onChange={(e) => {
                dispatch(changeName(e.target.value));
              }}
            />
          </div>
          <div className="my-4">
            <Input
              label={"PhoneNumber"}
              value={dataForm.phoneNumber}
              onChange={(e) => {
                dispatch(changePhoneNumber(e.target.value));
              }}
            />
          </div>
          <div className="my-4">
            <InputTextArea
              label={"Note"}
              value={dataForm.note}
              onChange={(e) => {
                dispatch(changeNote(e.target.value));
              }}
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
              onChange={(e) => {
                dispatch(changeCity(e.target.value));
              }}
            />
          </div>
          <div className="my-4">
            <Input
              label={"District"}
              value={dataForm.district}
              onChange={(e) => {
                dispatch(changeDistrict(e.target.value));
              }}
            />
          </div>
          <div className="my-4">
            <Input
              label={"Ward"}
              value={dataForm.ward}
              onChange={(e) => {
                dispatch(changeWard(e.target.value));
              }}
            />
          </div>
          <div className="my-4">
            <Input
              label={"Street"}
              value={dataForm.stress}
              onChange={(e) => {
                dispatch(changeStreet(e.target.value));
              }}
            />
          </div>
          <div className="my-4">
            <Input
              label={"StreetNumber"}
              value={dataForm.stressNumber}
              onChange={(e) => {
                dispatch(changeStreetNumber(e.target.value));
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryInformation;
