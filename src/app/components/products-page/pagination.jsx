"use client";
import classNames from "classnames";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function Pagination({ totalCount, pageIndex, pageSize, changePage }) {
  const maxSizePage = totalCount / pageSize;

  const handleChangePage = (numberPage) => {
    changePage(numberPage);
  };
  let renderItemPage = [];
  for (let i = 0; i < maxSizePage; i++) {
    renderItemPage.push(
      <li
        key={i}
        onClick={() => {
          handleChangePage(i);
        }}
        className={classNames(
          "mx-2 py-1 px-2 rounded hover:bg-teal-400 hover:text-white",
          { "bg-teal-400 text-white": pageIndex == i }
        )}
      >
        {i + 1}
      </li>
    );
  }
  return (
    <ul className="flex items-center bg-white py-1 px-2 rounded-md">
      <li className="mx-2 py-1 px-2 rounded hover:bg-teal-400 hover:text-white">
        <IoIosArrowBack />
      </li>
      {renderItemPage}
      <li className="mx-2 py-1 px-2 rounded hover:bg-teal-400 hover:text-white">
        <IoIosArrowForward />
      </li>
    </ul>
  );
}

export default Pagination;
