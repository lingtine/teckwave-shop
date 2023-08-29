"use client";
import { CiCircleRemove } from "react-icons/ci";
import { AiFillEdit } from "react-icons/ai";
import Table from "~/app/components/table/table";
import Link from "next/link";
function CouponData({ data }) {
  let configData;
  configData = [
    {
      label: "Coupon Name",
      render: (data) => {
        return (
          <div>
            <div>{data.name}</div>
          </div>
        );
      },
    },
    {
      label: "Description",
      render: (data) => {
        return data.description;
      },
    },
    {
      label: "Quantity",
      render: (data) => {
        return <div className="text-center">{data.quantity}</div>;
      },
    },
    {
      label: "Reduced Price",
      render: (data) => {
        return <div className="text-center">{data.reducedPrice}</div>;
      },
    },
    // {
    //   label: "Actions",
    //   render: (data) => {
    //     return (
    //       <div className="flex justify-center">
    //         <button
    //           className="mx-4"
    //           onClick={() => {
    //             removeCategory(data.id);
    //           }}
    //         >
    //           <CiCircleRemove />
    //         </button>
    //         <Link
    //           href={`/dashboard/category-group/edit-category-group/${data.id}`}
    //         >
    //           <AiFillEdit></AiFillEdit>
    //         </Link>
    //       </div>
    //     );
    //   },
    // },
  ];
  return (
    <div>
      <h4 className=" my-8 text-lg font-semibold uppercase text-secondary-3">
        Coupons
      </h4>

      <div>
        <Table data={data} config={configData} />
      </div>
    </div>
  );
}

export default CouponData;
