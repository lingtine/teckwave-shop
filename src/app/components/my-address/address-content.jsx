import Link from "next/link";
import Button from "../button/button";
import { BsHouseDoor } from "react-icons/bs";
import { LiaCitySolid } from "react-icons/lia";

function AddressContent({ data }) {
  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <ul>
          <li className="flex my-1 items-center">
            <div className="mx-4 text-color-text-secondary min-w-[100px] text-right">
              FullName:{" "}
            </div>
            <p>{data.name}</p>
            {data.default && (
              <span className="mx-4 text-sm text-primary rounded py-0.5 px-2 border bg-secondary-3">
                Default
              </span>
            )}
          </li>
          <li className="flex my-1 items-center">
            <div className="mx-4 text-color-text-secondary min-w-[100px] text-right">
              Phone:{" "}
            </div>
            <p>{data.phone}</p>
          </li>
          <li className="flex my-1 items-center">
            <div className="mx-4 text-color-text-secondary min-w-[100px] text-right">
              Address:{" "}
            </div>
            <p>{data.address}</p>
          </li>
          <li className="flex my-1 items-center">
            <div className="flex items-center text-secondary-3 ml-32">
              {data.typeAddress === 0 ? (
                <>
                  <BsHouseDoor />
                  <p className="mx-2">Nhà riêng</p>
                </>
              ) : (
                <>
                  <LiaCitySolid />
                  <p className="mx-2">Công Ty</p>
                </>
              )}
            </div>
          </li>
        </ul>
      </div>
      <div>
        <Link href={"/"} className="underline text-primary-1 hover:opacity-80 ">
          Edit Address
        </Link>
        <Button primary small hidden={data.default} className="my-2">
          Set it default
        </Button>
      </div>
    </div>
  );
}

export default AddressContent;
