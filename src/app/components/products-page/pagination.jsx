"use client";
import classNames from "classnames";
import Button from "../button/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconButton } from "@material-tailwind/react/components/IconButton";

function Pagination({ totalCount, pageIndex, pageSize, changePage }) {
  const maxSizePage = Math.floor(totalCount / pageSize) + 1;

  const handleChangePage = (numberPage) => {
    changePage(numberPage);
  };
  const handleBack = () => {
    if (pageIndex !== 0 || pageIndex !== 1) {
      changePage(pageIndex - 1);
    }
  };

  const handleForward = () => {
    if (pageIndex !== maxSizePage) {
      changePage(pageIndex + 1);
    }
  };
  let renderItemPage;
  renderItemPage = Array(maxSizePage)
    .fill(0)
    .map((_, i) => {
      return (
        <li
          key={i}
          onClick={() => {
            handleChangePage(i);
          }}
        >
          <IconButton variant={pageIndex == i ? "filled" : "text"}>
            {i + 1}
          </IconButton>
        </li>
      );
    });

  return (
    <ul className="flex items-center gap-4 bg-white py-1 px-2 rounded-md">
      <li>
        <Button
          onClick={handleBack}
          leftIcon={<IoIosArrowBack />}
          disabled={pageIndex === 0}
        >
          Previous
        </Button>
      </li>
      {renderItemPage}
      <li>
        <Button
          onClick={handleForward}
          rightIcon={<IoIosArrowForward />}
          disabled={maxSizePage === 1 || pageIndex === maxSizePage - 1}
        >
          next
        </Button>
      </li>
    </ul>
  );
}

export default Pagination;
