import classNames from "classnames";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function Pagination({}) {
  const activeStyle = "bg-teal-400 text-white";
  return (
    <ul className="flex items-center bg-white py-1 px-2 rounded-md">
      <li className="mx-2 py-1 px-2 rounded hover:bg-teal-400 hover:text-white">
        <IoIosArrowBack />
      </li>
      <li className="mx-2 py-1 px-2 rounded hover:bg-teal-400 hover:text-white">
        1
      </li>
      <li className="mx-2 py-1 px-2 rounded hover:bg-teal-400 hover:text-white">
        2
      </li>
      <li
        className={classNames(
          "mx-2 py-1 px-2 rounded hover:bg-teal-400 hover:text-white",
          activeStyle
        )}
      >
        3
      </li>
      <li className="mx-2 py-1 px-2 rounded hover:bg-teal-400 hover:text-white">
        4
      </li>
      <li className="mx-2 py-1 px-2 ">...</li>
      <li className="mx-2 py-1 px-2 rounded hover:bg-teal-400 hover:text-white">
        22
      </li>
      <li className="mx-2 py-1 px-2 rounded hover:bg-teal-400 hover:text-white">
        <IoIosArrowForward />
      </li>
    </ul>
  );
}

export default Pagination;
