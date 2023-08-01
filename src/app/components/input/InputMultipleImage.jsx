"use client";

import { BiImageAdd } from "react-icons/bi";
import { useRef } from "react";
function InputMultipleImage() {
  const inputRef = useRef();
  const handleAddFile = () => {
    inputRef.current.click();
  };
  return (
    <div className="px-8 flex flex-col items-center">
      <div className="flex flex-col bg-slate-100 rounded-md border-2 border-blue-500 border-dashed min-w-[400px] min-h-[300px] justify-center items-center ">
        <div className="text-9xl text-blue-500 ">
          <BiImageAdd />
        </div>
        <div className="text-primary-1 opacity-80 text-sm font-semibold">
          Drop your file here of{" "}
          <button onClick={handleAddFile} className="text-blue-500">
            Browser
          </button>
        </div>
        <input
          ref={inputRef}
          type="file"
          multiple
          hidden
          accept=".jpg, .jpeg, .png"
        />
      </div>
    </div>
  );
}

export default InputMultipleImage;
