"use client";

import { useState, useRef, useEffect } from "react";
import { BiLeftArrow, BiDownArrow } from "react-icons/bi";
function SelectBox({ options = [], placeholder, selected, onChange }) {
  const [isOpened, setIsOpened] = useState(false);
  const selectBoxRef = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      if (!selectBoxRef.current) return;
      if (!selectBoxRef.current.contains(e.target)) {
        setIsOpened(false);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleDropDown = () => {
    setIsOpened(!isOpened);
  };
  const renderOptions = options.map((option) => {
    const handleSelected = () => {
      setIsOpened(false);
      onChange(option);
    };

    return (
      <div className="" onClick={handleSelected} key={option.id}>
        {option.label}
      </div>
    );
  });
  return (
    <div
      ref={selectBoxRef}
      className="relative p-2 min-w-fit w-40 border bg-white rounded-lg"
    >
      <div className="text-base">
        <div
          onClick={handleDropDown}
          className="flex items-center justify-between"
        >
          <p>{selected ? selected.label : placeholder || "Select..."}</p>
          {isOpened && options.length !== 1 ? <BiDownArrow /> : <BiLeftArrow />}
        </div>
      </div>
      {isOpened && options.length !== 0 && (
        <ul className="absolute w-full max-h-[200px] overflow-scroll h-fit min-h-[20px] left-0 py-3 px-2 bg-white rounded-es-2xl rounded-ee-2xl shadow-lg z-30">
          {renderOptions}
        </ul>
      )}
    </div>
  );
}

export default SelectBox;
