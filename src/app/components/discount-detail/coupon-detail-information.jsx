"use client";
import { useGetDiscountEventQuery } from "~/redux/services/discount/discount-event-api";
import { useChangeStatusCouponMutation } from "~/redux/services/discount/coupon-api";
import SelectBox from "../select-box/select-box";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
function CouponDetailInformation({ data }) {
  const { data: DiscountEvent, isSuccess } = useGetDiscountEventQuery(
    data.discountEventId
  );

  const router = useRouter();
  const [changeStatus, result] = useChangeStatusCouponMutation();
  const [option, setOption] = useState({
    id: Math.random(),
    label: data.status,
  });
  useEffect(() => {
    if (result.isError) {
      const { Messages } = result.error.data;
      toast.error(Messages);
      setOption({
        id: Math.random(),
        label: data.status,
      });
    }
    if (result.isSuccess) {
      toast.success("Change Status succeeded");
      router.push("/dashboard/coupons");
    }
  }, [
    data.status,
    result.isError,
    result.isSuccess,
    router,
    result.error?.data,
  ]);

  useEffect(() => {
    if (option.label !== data.status) {
      changeStatus([data.id, { status: option.label }]);
    }
  }, [option, changeStatus, data.id, data.status]);

  let options = [
    {
      id: Math.random(),
      label: "Created",
    },
    {
      id: Math.random(),
      label: "Effecting",
    },
    {
      id: Math.random(),
      label: "Expired",
    },
  ];
  return (
    <div>
      <h3 className="text-xl text-secondary-3 uppercase font boder">
        Information
      </h3>
      <div className="flex items-end justify-between">
        <span className="text-lg font-semibold">Name: </span>
        <p>{data.name}</p>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-lg font-semibold">Description: </span>
        <p>{data.description}</p>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-lg font-semibold">Reduced Price: </span>
        <p>{data.reducedPrice}</p>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-lg font-semibold">Discount Event Name: </span>
        <p>{isSuccess && DiscountEvent.data.name}</p>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-lg font-semibold">Quantity: </span>
        <p>{data.quantity}</p>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-lg font-semibold">Status: </span>
        <SelectBox options={options} onChange={setOption} selected={option} />
      </div>
    </div>
  );
}

export default CouponDetailInformation;
