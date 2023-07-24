import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "~/app/components/button/button";
import AddressContent from "~/app/components/my-address/address-content";

function MyAddress() {
  const data = [
    {
      id: Math.random(),
      name: "nguyen hung anh",
      phone: "0937155085",
      address: "Nguyễn Hùng Anh, Quận Bình Thạnh, TP HCM",
      typeAddress: 0,
      default: true,
    },
    {
      id: Math.random(),
      name: "nguyen hung anh",
      phone: "0937155085",
      address: "Nguyễn Hùng Anh, Quận Bình Thạnh, TP HCM",
      typeAddress: 1,
      default: false,
    },
    {
      id: Math.random(),
      name: "nguyen hung anh",
      phone: "0937155085",
      address: "Nguyễn Hùng Anh, Quận Bình Thạnh, TP HCM",
      typeAddress: 1,
      default: false,
    },
    {
      id: Math.random(),
      name: "nguyen hung anh",
      phone: "0937155085",
      address: "Nguyễn Hùng Anh, Quận Bình Thạnh, TP HCM",
      typeAddress: 1,
      default: false,
    },
  ];
  return (
    <div className="px-4 border">
      <div className="">
        <div className="border-b py-4 text-xl font-semibold">
          <h4>My Address</h4>
        </div>
        <div className="flex justify-end w-full text-base py-8 border-b">
          <Link href="/">
            <Button secondary large leftIcon={<AiOutlinePlus />}>
              Add Address
            </Button>
          </Link>
        </div>
        <div>
          {data.map((address) => {
            return <AddressContent data={address} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MyAddress;
