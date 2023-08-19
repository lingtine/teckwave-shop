"use client";
import { useState, useEffect } from "react";
import { BiImageAdd } from "react-icons/bi";
import { useRef } from "react";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";
function InputImage({ onChange, multiple }) {
  const inputRef = useRef();
  const [imageFiles, setImageFiles] = useState(null);
  const handleAddFile = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const { files } = e.target;

    onChange(files);
    setImageFiles(files);
  };
  const handleRemoveFile = (file) => {
    const dt = new DataTransfer();
    const { files } = inputRef.current;

    for (let i = 0; i < files.length; i++) {
      if (file !== files[i]) dt.items.add(files[i]); // here you exclude the file. thus removing it.
    }

    inputRef.current.files = dt.files;
    setImageFiles(dt.files);
    console.log(imageFiles);
  };

  let content;
  if (imageFiles) {
    content = Array.from(imageFiles).map((imageFile, index) => {
      const url = URL.createObjectURL(imageFile);
      return (
        <li
          key={index}
          className="flex items-center justify-between px-4 py-2 border my-4 rounded-md bg-secondary-3"
        >
          <Image src={url} alt={imageFile.name} width={40} height={30} />
          <button
            onClick={() => {
              handleRemoveFile(imageFile);
            }}
            className="text-primary"
          >
            <FiTrash2 />
          </button>
        </li>
      );
    });
  }

  return (
    <div className="px-8 flex flex-col items-center cursor-pointer">
      <div className="flex flex-col bg-slate-100 rounded-md border-2 border-blue-500 border-dashed min-w-[400px] min-h-[300px] justify-center items-center ">
        <div onClick={handleAddFile} className="text-9xl text-blue-500 ">
          <BiImageAdd />
        </div>
        <div className="text-primary-1 opacity-80 text-sm font-semibold">
          Drop your file here of{" "}
          <button className="text-blue-500" onClick={handleRemoveFile}>
            Browser
          </button>
        </div>
        <input
          ref={inputRef}
          type="file"
          hidden
          multiple={multiple}
          onChange={handleChange}
          accept=".jpg, .jpeg, .png"
        />
      </div>
      <ul className="w-full">{content}</ul>
    </div>
  );
}

export default InputImage;
