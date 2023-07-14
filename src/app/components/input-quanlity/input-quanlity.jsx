"use client";
import { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

function InputQuantity({ quantity, onChange, maxQuantity = 99 }) {
  const [value, setValue] = useState(quantity);
  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    setValue(value);
  };

  const handleDecrease = () => {
    if (quantity === 0) {
      setValue(0);
      onChange(0);
    } else {
      onChange(quantity - 1);
      setValue(value - 1);
    }
  };
  const handleIncrease = () => {
    if (quantity >= maxQuantity) {
      setValue(maxQuantity);
      onChange(maxQuantity);
    } else {
      setValue(value + 1);
      onChange(quantity + 1);
    }
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setValue(0);
      onChange(0);
      return;
    }
    const value = parseInt(e.target.value);
    if (value > maxQuantity) {
      setValue(maxQuantity);
      onChange(maxQuantity);
    } else {
      setValue(value);
      onChange(value);
    }
  };
  return (
    <div className="flex items-center justify-between border">
      <button className={"p-2"} onClick={handleDecrease}>
        <HiOutlineMinus />
      </button>
      <input
        className={"max-w-[32px] text-center"}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        type={"number"}
      />
      <button className={"p-2"} onClick={handleIncrease}>
        <HiOutlinePlus />
      </button>
    </div>
  );
}

export default InputQuantity;
