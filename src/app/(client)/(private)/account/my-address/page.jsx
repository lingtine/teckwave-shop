"use client";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "~/app/components/button/button";
import AddressContent from "~/app/components/my-address/address-content";
import { useParams } from "next/navigation";
import { useGetCustomerQuery } from "~/redux/services/customer/customer-api";
import { useSelector } from "react-redux";

function MyAddress() {
  const { user } = useSelector((state) => state.user);

  let renderData;

  renderData = user?.deliveryInfos.map((address) => {
    return <AddressContent data={address} key={address.id} />;
  });

  return (
    <div className="px-4 border">
      <div className="">
        <div className="border-b py-4 text-xl font-semibold">
          <h4>My Address</h4>
        </div>
        <div className="flex justify-end w-full text-base py-8 border-b">
          <Link href={`/account/my-address/add-address`}>
            <Button secondary leftIcon={<AiOutlinePlus />}>
              Add Address
            </Button>
          </Link>
        </div>
        <div>{renderData}</div>
      </div>
    </div>
  );
}

export default MyAddress;
