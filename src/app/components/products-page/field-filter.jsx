"use client";

import { useState } from "react";
import OptionFilter from "./option-filter";
import { BiLeftArrow, BiDownArrow } from "react-icons/bi";
function FieldFilter({ field, filter, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="px-4 border-b">
      <div
        onClick={handleDropDown}
        className="bg-white my-2 flex justify-between items-center"
      >
        <h4>{field.label}</h4>
        {isOpen ? <BiDownArrow /> : <BiLeftArrow />}
      </div>
      {isOpen && (
        <ul>
          {field.options.map((option) => (
            <OptionFilter
              onSelected={onChange}
              selected={filter}
              name={field.label}
              key={option.id}
              option={option}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default FieldFilter;
