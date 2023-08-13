"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";
import SelectBox from "~/app/components/select-box/select-box";

import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllCityQuery } from "~/redux/services/address/address-api";
import {
  changeDistrict,
  changeCity,
  changeName,
  changePhoneNumber,
  changeStreet,
  changeWard,
} from "~/redux/features/dashboard/form-add-address-slice";

import { useAddDeliveryInfosMutation } from "~/redux/services/customer/customer-api";
import Link from "next/link";

function AddAddress() {
  const { data: cityData, isSuccess } = useGetAllCityQuery();
  const dispatch = useDispatch();
  const { customerId } = useParams();
  const dataForm = useSelector((state) => state.addAddressForm);

  const [addDeliveryInfos, result] = useAddDeliveryInfosMutation();

  let configCityData;
  if (isSuccess) {
    configCityData = cityData.map((city) => {
      return { ...city, label: city.name, id: city.code };
    });
    console.log(configCityData[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addDeliveryInfos(customerId, dataForm);
  };

  return (
    <div className="px-10">
      <h1 className="text-xl font-bold text-primary-1">Add Address</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <ul>
            <li className="my-4">
              <Input label={"Name"} required />
            </li>
            <li className="my-4">
              <Input label={"Phone Number"} required />
            </li>
            <li className="my-4">
              {isSuccess && (
                <SelectBox
                  options={configCityData}
                  selected={configCityData[0] || ""}
                  onChange={(city) => {
                    dispatch(changeCity(city));
                  }}
                />
              )}
            </li>
            <li className="my-4">
              <Input label={"District"} required />
            </li>
            <li className="my-4">
              <InputTextArea label={"Address"} required />
            </li>
            {/* <li className="flex my-2 items-center">
              <h4 className="font-semibold">Type Address: </h4>
              <div className="mx-2 flex items-center">
                <input className="mx-2" type="radio" checked />
                <label>Apartment</label>
              </div>
              <div className="mx-2 flex items-center">
                <input className="mx-2" type="radio" />
                <label>Company</label>
              </div>
            </li> */}
            <li className="flex justify-end items-center">
              <Link
                className="mx-6 btn primary py-2 px-4 border border-primary-1 bg-secondary-2"
                href={`/dashboard/account/${customerId}/my-address`}
              >
                Trở về
              </Link>
              <Button secondary normal>
                Add Address
              </Button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default AddAddress;
