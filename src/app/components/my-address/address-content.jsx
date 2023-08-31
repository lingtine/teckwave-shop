"use client";

import Link from "next/link";
import Button from "../button/button";
import { BsHouseDoor } from "react-icons/bs";
import { LiaCitySolid } from "react-icons/lia";
import { useChangeDeliveryInfoDefaultMutation } from "~/redux/services/customer/customer-api";

function AddressContent({ data }) {
  const [setAddressDefault, result] = useChangeDeliveryInfoDefaultMutation();
  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <ul>
          <li className="flex my-1 items-center">
            <div className="mx-4 text-color-text-secondary min-w-[100px] text-right">
              Name:
            </div>
            <p>{data.name}</p>
            {data.isDefault && (
              <span className="mx-4 text-sm text-primary rounded py-0.5 px-2 border bg-secondary-3">
                Default
              </span>
            )}
          </li>
          <li className="flex my-1 items-center">
            <div className="mx-4 text-color-text-secondary min-w-[100px] text-right">
              Phone:{" "}
            </div>
            <p>{data.phoneNumber}</p>
          </li>
          <li className="flex my-1 items-center">
            <div className="mx-4 text-color-text-secondary min-w-[100px] text-right">
              Address:{" "}
            </div>
            <p>
              {data.address.street} {data.address.ward} {data.address.district}{" "}
              {data.address.city}
            </p>
          </li>
        </ul>
      </div>
      <div>
        <Link
          href={`/account/my-address/edit-address/${data.id}`}
          className="underline text-primary-1 hover:opacity-80 "
        >
          Edit Address
        </Link>
        <Button
          onClick={() => {
            setAddressDefault(data.id);
          }}
          primary1
          small
          text={data.isDefault}
          hidden={data.isDefault}
          className="my-2"
        >
          Set it default
        </Button>
      </div>
    </div>
  );
}

export default AddressContent;
