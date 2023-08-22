"use client";

import Link from "next/link";
import { useFetchCategoryGroupsQuery } from "~/redux/services/catalog/category-group-api";

function NavBar() {
  const { data: categoryGroupsData, isSuccess } = useFetchCategoryGroupsQuery();

  let renderCategory;

  if (isSuccess) {
    renderCategory = categoryGroupsData.data.map((item, index) => (
      <li
        key={index}
        className="group border-b-2 w-full h-full flex items-center justify-center text-primary-1 font-semibold hover:cursor-pointer hover:bg-secondary-3 hover:text-primary"
      >
        <Link href={`/${item.id}`}>
          <div className="uppercase">{item.name}</div>
          {/* <div className="hidden p-2 group-hover:block absolute min-h-full left-[110%] h-fit w-[1072px] inset-0 bg-white shadow-lg rounded-lg z-20 before:absolute before:-left-3 before:w-[10px] before:h-full before:bg-transparent">
          <div className="flex justify-start flex-wrap text-gray-800"></div>
        </div> */}
        </Link>
      </li>
    ));
  }

  return (
    <div className="flex-[0_0_20%]">
      <ul className="flex h-full flex-col justify-between items-center relative ">
        {renderCategory}
      </ul>
    </div>
  );
}

export default NavBar;
