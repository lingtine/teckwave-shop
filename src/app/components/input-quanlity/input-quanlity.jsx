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
    <div className="flex h-fit items-center min-w-[120px] justify-between border border-color-black max-w-[159px]">
      <button
        className={"p-2 border-r border-r-color-black "}
        onClick={handleDecrease}
      >
        <HiOutlineMinus />
      </button>
      <input
        className={"max-w-[32px] text-center"}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        type={"number"}
      />
      <button
        className={
          "p-2 text-secondary bg-secondary-3 border-l border-l-secondary-3"
        }
        onClick={handleIncrease}
      >
        <HiOutlinePlus />
      </button>
    </div>
  );
}

export default InputQuantity;
