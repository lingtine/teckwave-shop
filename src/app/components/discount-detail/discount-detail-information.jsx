"use client";

import { useEffect, useState } from "react";
import SelectBox from "../select-box/select-box";
import { useChangeStatusDiscountEventMutation } from "~/redux/services/discount/discount-event-api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function DiscountInformation({ data }) {
  const router = useRouter();
  const [changeStatus, result] = useChangeStatusDiscountEventMutation();
  const [option, setOption] = useState({
    id: Math.random(),
    label: data.status,
  });
  useEffect(() => {
    if (result.isError) {
      toast.error(result.error.data.Messages);
      setOption({
        id: Math.random(),
        label: data.status,
      });
    }
    if (result.isSuccess) {
      toast.success("Change Status Success");
      router.push("/dashboard/discount");
    }
  }, [result.isError, result.isSuccess]);
  useEffect(() => {
    if (option.label !== data.status) {
      changeStatus([data.id, option.label]);
    }
  }, [option]);

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
    <div className="flex flex-col gap-4">
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
        <span className="text-lg font-semibold">Status: </span>
        <SelectBox options={options} onChange={setOption} selected={option} />
      </div>
    </div>
  );
}

export default DiscountInformation;
